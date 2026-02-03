import { Preference, Payment } from 'mercadopago';
import client from '../config/mercadopago.js';
import { db } from '../config/firebase.js';
import { collection, addDoc, serverTimestamp, getDocs, query, orderBy, doc, updateDoc, deleteDoc } from 'firebase/firestore';

export const createPayment = async (req, res) => {
    try {
        const { attendees, totalAmount } = req.body;

        console.log('📝 Recebendo dados:', { attendees, totalAmount });

        // Validação básica
        if (!attendees || !Array.isArray(attendees) || attendees.length === 0) {
            return res.status(400).json({ error: 'Nenhum participante informado' });
        }

        for (const attendee of attendees) {
            if (!attendee.name || !attendee.birthDate || !attendee.whatsapp) {
                return res.status(400).json({ error: 'Dados incompletos de algum participante' });
            }
        }

        const PRICE_PER_PERSON = 30.00;
        const quantity = attendees.length;
        const calculatedTotal = quantity * PRICE_PER_PERSON;
        const preference = new Preference(client);

        // Cria ID do grupo
        const groupId = `reg_${Date.now()}`;

        // Salva todas as inscrições no Firebase
        const registrationIds = [];
        for (const attendee of attendees) {
            const docRef = await addDoc(collection(db, 'registrations'), {
                groupId: groupId,
                name: attendee.name,
                birthDate: attendee.birthDate,
                whatsapp: attendee.whatsapp,
                hasCell: attendee.hasCell === 'sim',
                cellName: attendee.hasCell === 'sim' ? attendee.cellName : null,
                status: 'pending',
                amount: PRICE_PER_PERSON,
                createdAt: serverTimestamp()
            });
            registrationIds.push(docRef.id);
        }

        console.log('✅ Inscrições salvas no Firebase:', quantity, 'pessoas');

        const body = {
            items: [
                {
                    id: 'rodizio-hamburguer',
                    title: 'Rodízio de Hambúrguer - Rede Laranja',
                    quantity: quantity,
                    unit_price: PRICE_PER_PERSON,
                    currency_id: 'BRL',
                    description: `${quantity} inscrição(ões): ${attendees.map(a => a.name).join(', ')}`
                }
            ],
            payer: {
                name: attendees[0].name,
                email: 'jonascarris+mp@gmail.com'
            },
            back_urls: {
                success: req.headers.origin || 'http://localhost:5173',
                failure: req.headers.origin || 'http://localhost:5173',
                pending: req.headers.origin || 'http://localhost:5173'
            },
            external_reference: groupId
        };

        console.log('🔄 Criando preferência no Mercado Pago...');
        console.log('💰 Total:', calculatedTotal, '(', quantity, 'x R$', PRICE_PER_PERSON, ')');
        const result = await preference.create({ body });
        console.log('✅ Preferência criada:', result.id);
        console.log('🔗 Link de pagamento:', result.init_point);

        res.json({
            id: result.id,
            init_point: result.init_point
        });
    } catch (error) {
        console.error('❌ Erro ao criar pagamento:', error);
        console.error('Detalhes:', error.message);
        res.status(500).json({
            error: 'Erro ao processar pagamento',
            details: error.message
        });
    }
};

export const receiveWebhook = async (req, res) => {
    try {
        const { action, data } = req.body;
        console.log('🔔 Webhook recebido:', { action, data });

        if (action === 'payment.created' || action === 'payment.updated') {
            if (data && data.id) {
                const payment = new Payment(client);
                const paymentData = await payment.get({ id: data.id });

                console.log('💳 Payment Status:', paymentData.status);
                console.log('🔗 External Reference:', paymentData.external_reference);

                if (paymentData.external_reference) {
                    const status = paymentData.status; // approved, refunded, cancelled, etc.
                    const q = query(collection(db, 'registrations'));
                    const snapshot = await getDocs(q);

                    const updates = [];
                    snapshot.forEach((docSnapshot) => {
                        const regData = docSnapshot.data();
                        if (regData.groupId === paymentData.external_reference) {
                            const docRef = doc(db, 'registrations', docSnapshot.id);

                            // Map MP status to our system status
                            let finalStatus = 'pending';
                            if (status === 'approved') finalStatus = 'approved';
                            if (status === 'refunded') finalStatus = 'refunded';
                            if (status === 'cancelled' || status === 'rejected') finalStatus = 'cancelled';

                            updates.push(
                                updateDoc(docRef, {
                                    status: finalStatus,
                                    paymentId: data.id,
                                    updatedAt: serverTimestamp(),
                                    ...(finalStatus === 'approved' ? { approvedAt: serverTimestamp() } : {})
                                })
                            );
                        }
                    });

                    await Promise.all(updates);
                    console.log('✅ Status atualizado para', updates.length, 'inscrições como', status);
                }
            }
        }

        res.sendStatus(200);
    } catch (error) {
        console.error('❌ Erro no webhook:', error);
        res.sendStatus(500);
    }
};

export const refundPayment = async (req, res) => {
    try {
        const { id } = req.params; // ID da inscrição no Firebase
        console.log('💰 Iniciando estorno para inscrição:', id);

        // 1. Buscar a inscrição para pegar o paymentId
        const docRef = doc(db, 'registrations', id);
        const snapshot = await getDocs(query(collection(db, 'registrations')));

        let registration = null;
        let registrationId = id;

        // Melhora a busca: o id que vem do parâmetro é o doc.id
        // Mas vamos buscar todos do mesmo grupo para estornar o pagamento completo se necessário
        // (Mercado Pago costuma estornar o pagamento inteiro se for uma única transação)

        const targetDoc = snapshot.docs.find(d => d.id === id);
        if (!targetDoc) {
            return res.status(404).json({ error: 'Inscrição não encontrada' });
        }

        registration = targetDoc.data();
        const paymentId = registration.paymentId;
        const groupId = registration.groupId;

        if (!paymentId) {
            return res.status(400).json({ error: 'Inscrição não possui ID de pagamento (ainda pendente)' });
        }

        // 2. Chamar API do Mercado Pago para estorno
        console.log('🔄 Chamando API de Reembolso do Mercado Pago para ID:', paymentId);
        const payment = new Payment(client);

        // O MP permite reembolso total ou parcial. Aqui faremos o total do pagamento associado.
        await payment.refund({ payment_id: paymentId });

        // 3. Atualizar todas as inscrições do mesmo grupo como refunded
        const updates = [];
        snapshot.forEach((docSnapshot) => {
            const data = docSnapshot.data();
            if (data.groupId === groupId) {
                updates.push(
                    updateDoc(doc(db, 'registrations', docSnapshot.id), {
                        status: 'refunded',
                        refundedAt: serverTimestamp()
                    })
                );
            }
        });

        await Promise.all(updates);
        console.log('✅ Estorno concluído com sucesso');

        res.json({ success: true, message: 'Estorno realizado com sucesso' });
    } catch (error) {
        console.error('❌ Erro ao realizar estorno:', error);
        res.status(500).json({
            error: 'Erro ao processar estorno no Mercado Pago',
            details: error.message
        });
    }
};

export const getRegistrations = async (req, res) => {
    try {
        console.log('📋 Buscando inscrições do Firebase...');
        const q = query(collection(db, 'registrations'), orderBy('createdAt', 'desc'));
        const snapshot = await getDocs(q);

        const registrations = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
            createdAt: doc.data().createdAt?.toDate().toISOString()
        }));

        console.log('✅ Encontradas', registrations.length, 'inscrições');
        res.json(registrations);
    } catch (error) {
        console.error('❌ Erro ao buscar inscrições:', error);
        res.status(500).json({ error: 'Erro ao buscar inscrições' });
    }
};

export const deleteRegistration = async (req, res) => {
    try {
        const { id } = req.params;
        console.log('🗑️ Excluindo inscrição:', id);

        await deleteDoc(doc(db, 'registrations', id));
        console.log('✅ Inscrição excluída com sucesso');
        res.json({ success: true, message: 'Inscrição excluída' });
    } catch (error) {
        console.error('❌ Erro ao excluir inscrição:', error);
        res.status(500).json({
            error: 'Erro ao excluir inscrição',
            details: error.message,
            id: req.params.id
        });
    }
};

export const syncRegistrationStatus = async (req, res) => {
    try {
        const { id } = req.params;
        console.log('🔄 Sincronizando inscrição com Mercado Pago:', id);

        const snapshot = await getDocs(query(collection(db, 'registrations')));
        const targetDoc = snapshot.docs.find(d => d.id === id);

        if (!targetDoc) {
            return res.status(404).json({ error: 'Inscrição não encontrada' });
        }

        const registration = targetDoc.data();
        let paymentId = registration.paymentId;
        const groupId = registration.groupId;

        const payment = new Payment(client);
        let status = null;

        // Se não tem paymentId, vamos tentar buscar por external_reference (groupId)
        if (!paymentId) {
            console.log('🔍 Buscando pagamento por external_reference:', groupId);
            const searchResult = await payment.search({
                options: {
                    external_reference: groupId
                }
            });

            if (searchResult.results && searchResult.results.length > 0) {
                // Pega o pagamento mais recente aprovado ou o último se nenhum for aprovado
                const bestPayment = searchResult.results.find(p => p.status === 'approved') || searchResult.results[0];
                paymentId = bestPayment.id;
                status = bestPayment.status;
                console.log('✅ Pagamento encontrado via busca:', paymentId, status);
            } else {
                return res.status(404).json({ error: 'Nenhum pagamento encontrado no Mercado Pago para esta inscrição.' });
            }
        } else {
            // Se já tem paymentId, só pega o status atual dele
            const paymentData = await payment.get({ id: paymentId });
            status = paymentData.status;
        }

        // Map status
        let finalStatus = 'pending';
        if (status === 'approved') finalStatus = 'approved';
        if (status === 'refunded') finalStatus = 'refunded';
        if (status === 'cancelled' || status === 'rejected') finalStatus = 'cancelled';

        // Atualiza todas do grupo para manter consistência
        const updates = [];
        snapshot.forEach((docSnapshot) => {
            const data = docSnapshot.data();
            if (data.groupId === groupId) {
                updates.push(
                    updateDoc(doc(db, 'registrations', docSnapshot.id), {
                        status: finalStatus,
                        paymentId: paymentId, // Salva o ID caso não tivesse
                        updatedAt: serverTimestamp(),
                        ...(finalStatus === 'approved' ? { approvedAt: serverTimestamp() } : {})
                    })
                );
            }
        });

        await Promise.all(updates);
        console.log('✅ Sincronização concluída. Novo status:', finalStatus);

        res.json({ success: true, status: finalStatus });
    } catch (error) {
        console.error('❌ Erro ao sincronizar:', error);
        res.status(500).json({ error: 'Erro ao sincronizar com MP', details: error.message });
    }
};

export const updateStatusManual = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        console.log(`📝 Atualizando status manualmente para ${id}: ${status}`);

        const docRef = doc(db, 'registrations', id);
        await updateDoc(docRef, {
            status: status, // approved, pending, etc.
            updatedAt: serverTimestamp(),
            manualUpdate: true,
            approvedAt: status === 'approved' ? serverTimestamp() : null
        });

        console.log('✅ Status atualizado manualmente');
        res.json({ success: true, message: 'Status atualizado com sucesso' });
    } catch (error) {
        console.error('❌ Erro na atualização manual:', error);
        res.status(500).json({ error: 'Erro ao atualizar status', details: error.message });
    }
};
