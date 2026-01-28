import React, { useState } from 'react';
import axios from 'axios';

const SimpleRegistration: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        birthDate: '',
        whatsapp: '',
        hasCell: 'nao',
        cellName: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name || !formData.birthDate || !formData.whatsapp) {
            alert('Por favor, preencha todos os campos obrigatórios');
            return;
        }

        if (formData.hasCell === 'sim' && !formData.cellName) {
            alert('Por favor, informe o nome da célula');
            return;
        }

        setLoading(true);
        try {
            const response = await axios.post('/api/create-payment', formData);

            // Redireciona para o link de pagamento do Mercado Pago
            if (response.data.init_point) {
                window.location.href = response.data.init_point;
            }
        } catch (error) {
            console.error('Erro ao processar inscrição:', error);
            alert('Erro ao processar inscrição. Tente novamente.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 py-12 px-4">
            <div className="max-w-2xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold text-orange-600 mb-2">
                            🍔 Rodízio de Hambúrguer
                        </h1>
                        <p className="text-gray-600 text-lg">Rede Laranja - 14/03/2026</p>
                        <div className="mt-4 inline-block bg-orange-100 px-6 py-3 rounded-full">
                            <p className="text-2xl font-bold text-orange-700">R$ 30,00</p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">
                                Nome Completo *
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                placeholder="Digite seu nome completo"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-medium mb-2">
                                Data de Nascimento *
                            </label>
                            <input
                                type="date"
                                name="birthDate"
                                value={formData.birthDate}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-medium mb-2">
                                WhatsApp *
                            </label>
                            <input
                                type="tel"
                                name="whatsapp"
                                value={formData.whatsapp}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                placeholder="(00) 00000-0000"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-medium mb-2">
                                Faz parte de célula? *
                            </label>
                            <select
                                name="hasCell"
                                value={formData.hasCell}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            >
                                <option value="nao">Não</option>
                                <option value="sim">Sim</option>
                            </select>
                        </div>

                        {formData.hasCell === 'sim' && (
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">
                                    Nome da Célula *
                                </label>
                                <input
                                    type="text"
                                    name="cellName"
                                    value={formData.cellName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                    placeholder="Digite o nome da célula"
                                />
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-4 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? 'Processando...' : '💳 Pagar R$ 30,00'}
                        </button>
                    </form>

                    <p className="text-center text-gray-500 text-sm mt-6">
                        Você será redirecionado para o Mercado Pago para concluir o pagamento
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SimpleRegistration;
