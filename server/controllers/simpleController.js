import { Preference, Payment } from 'mercadopago';
import client from '../config/mercadopago.js';
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp, getDocs, query, orderBy, doc, updateDoc, deleteDoc } from 'firebase/firestore';

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAU1qTBq-ERKXtQht0xBM0nP3S44vhxi2g",
    authDomain: "hamburguer-rede-laranja.firebaseapp.com",
    projectId: "hamburguer-rede-laranja",
    storageBucket: "hamburguer-rede-laranja.firebasestorage.app",
    messagingSenderId: "783571658204",
    appId: "1:783571658204:web:c3d0c264070dfdcc2d5b19"
};

// Inicializar Firebase apenas se ainda não foi inicializado
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

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

                // Atualiza o status no Firebase
                if (paymentData.external_reference && paymentData.status === 'approved') {
                    const q = query(collection(db, 'registrations'));
                    const snapshot = await getDocs(q);

                    const updates = [];
                    snapshot.forEach((docSnapshot) => {
                        const regData = docSnapshot.data();
                        if (regData.groupId === paymentData.external_reference) {
                            const docRef = doc(db, 'registrations', docSnapshot.id);
                            updates.push(
                                updateDoc(docRef, {
                                    status: 'approved',
                                    paymentId: data.id,
                                    approvedAt: serverTimestamp()
                                })
                            );
                        }
                    });

                    await Promise.all(updates);
                    console.log('✅ Status atualizado para', updates.length, 'inscrições');
                }
            }
        }

        res.sendStatus(200);
    } catch (error) {
        console.error('❌ Erro no webhook:', error);
        res.sendStatus(500);
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
