import React, { useState } from 'react';
import axios from 'axios';
import { Trash2, Plus, CreditCard } from 'lucide-react';
import { Wallet } from '@mercadopago/sdk-react';

interface Attendee {
    id: number;
    name: string;
    dob: string;
    phone: string;
    cell: string;
    leader: string;
}

const RegistrationForm: React.FC = () => {
    const [attendees, setAttendees] = useState<Attendee[]>([
        { id: 1, name: '', dob: '', phone: '', cell: '', leader: '' }
    ]);
    const [coupon, setCoupon] = useState('');
    const [discount, setDiscount] = useState(0);
    const [preferenceId, setPreferenceId] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const PRICE_PER_PERSON = 30.00;

    const addAttendee = () => {
        setAttendees([...attendees, {
            id: Date.now(),
            name: '',
            dob: '',
            phone: '',
            cell: '',
            leader: ''
        }]);
    };

    const removeAttendee = (id: number) => {
        if (attendees.length > 1) {
            setAttendees(attendees.filter(a => a.id !== id));
        }
    };

    const handleChange = (id: number, field: keyof Attendee, value: string) => {
        setAttendees(attendees.map(a => a.id === id ? { ...a, [field]: value } : a));
    };

    const validateCoupon = async () => {
        // Simulação de validação (substituir por chamada à API)
        if (coupon.toUpperCase() === 'LARANJA10') {
            setDiscount(10); // Exemplo fixo
            alert('Cupom aplicado!');
        } else {
            setDiscount(0);
            alert('Cupom inválido');
        }
    };

    const total = (attendees.length * PRICE_PER_PERSON) - discount;

    const handleCheckout = async () => {
        setLoading(true);
        try {
            // Chamada ao Backend usando Proxy do Vite
            const response = await axios.post('/api/create-preference', {
                attendees,
                discountValue: discount
            });
            setPreferenceId(response.data.id);
        } catch (error) {
            console.error('Erro no checkout', error);
            alert('Erro ao iniciar pagamento. Verifique o console.');
        } finally {
            setLoading(false);
        }
    };

    // Public Key do Frontend
    const MP_PUBLIC_KEY = 'APP_USR-0a44bde2-c137-42de-b3d6-c3d1156f8205';

    if (preferenceId) {
        // Redireciona ou mostra o Wallet Brick
        // Note: Wallet initialization requires initialization of MP SDK in generic context usually, 
        // but here using the component directly.
        // Make sure to wrap App with initMercadoPago or use the component locally if configured.
        // For simplicity, we are returning the Wallet component here.
        // Assuming initMercadoPago is called in main.tsx or App.tsx, but we can't see that file fully yet.
        // Putting the initializer here just in case (though ideally it's global).

        return (
            <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg mt-10">
                <h2 className="text-2xl font-bold text-center text-orange-600 mb-6">Pagamento</h2>
                <div id="wallet_container">
                    <Wallet initialization={{ preferenceId: preferenceId }} />
                </div>
                <button
                    onClick={() => setPreferenceId(null)}
                    className="mt-4 w-full text-center text-gray-500 hover:text-gray-700 underline"
                >
                    Voltar
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto p-4 sm:p-8 bg-orange-50 min-h-screen">
            <h1 className="text-4xl font-extrabold text-orange-600 text-center mb-2">Rodízio de Hambúrguer</h1>
            <p className="text-center text-gray-700 mb-8 font-medium">Rede Laranja - 14/03/2026</p>

            <div className="space-y-6">
                {attendees.map((person, index) => (
                    <div key={person.id} className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-orange-500 relative transition-all hover:shadow-md">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-bold text-gray-800">Participante #{index + 1}</h3>
                            {attendees.length > 1 && (
                                <button onClick={() => removeAttendee(person.id)} className="text-red-500 hover:text-red-700 p-2">
                                    <Trash2 size={20} />
                                </button>
                            )}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                                placeholder="Nome Completo"
                                value={person.name}
                                onChange={e => handleChange(person.id, 'name', e.target.value)}
                            />
                            <input
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                                placeholder="Data de Nascimento"
                                type="date"
                                value={person.dob}
                                onChange={e => handleChange(person.id, 'dob', e.target.value)}
                            />
                            <input
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                                placeholder="Telefone (WhatsApp)"
                                value={person.phone}
                                onChange={e => handleChange(person.id, 'phone', e.target.value)}
                            />
                            <div className="flex gap-2">
                                <input
                                    className="w-1/2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                                    placeholder="Célula"
                                    value={person.cell}
                                    onChange={e => handleChange(person.id, 'cell', e.target.value)}
                                />
                                <input
                                    className="w-1/2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                                    placeholder="Líder"
                                    value={person.leader}
                                    onChange={e => handleChange(person.id, 'leader', e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-6 flex justify-center">
                <button
                    onClick={addAttendee}
                    className="flex items-center gap-2 bg-gradient-to-r from-orange-400 to-orange-600 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-transform"
                >
                    <Plus size={24} /> Adicionar Pessoa
                </button>
            </div>

            <div className="mt-10 bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Resumo do Pedido</h3>

                <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-600">Total de Pessoas:</span>
                    <span className="font-bold text-lg">{attendees.length}</span>
                </div>

                <div className="flex gap-4 items-center mb-6">
                    <input
                        className="flex-1 p-2 border border-gray-300 rounded-lg"
                        placeholder="Cupom de Desconto"
                        value={coupon}
                        onChange={e => setCoupon(e.target.value)}
                    />
                    <button
                        onClick={validateCoupon}
                        className="bg-gray-800 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-700"
                    >
                        Aplicar
                    </button>
                </div>

                {discount > 0 && (
                    <div className="flex justify-between items-center text-green-600 mb-2">
                        <span>Desconto:</span>
                        <span>- R$ {discount.toFixed(2)}</span>
                    </div>
                )}

                <div className="flex justify-between items-center text-2xl font-black text-orange-600 border-t pt-4 mb-6">
                    <span>Total a Pagar:</span>
                    <span>R$ {total.toFixed(2)}</span>
                </div>

                <button
                    onClick={handleCheckout}
                    disabled={loading || total <= 0}
                    className="w-full bg-green-500 text-white py-4 rounded-xl font-bold text-lg hover:bg-green-600 shadow-md transition-colors flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {loading ? 'Processando...' : (
                        <>
                            <CreditCard /> Pagar Agora
                        </>
                    )}
                </button>
            </div>
        </div>
    );
};

export default RegistrationForm;
