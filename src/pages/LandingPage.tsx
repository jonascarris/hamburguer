import React, { useState } from 'react';
import axios from 'axios';

interface Attendee {
    id: number;
    name: string;
    birthDate: string;
    whatsapp: string;
    hasCell: string;
    cellName: string;
}

export const LandingPage: React.FC<{ onNavigateToAdmin?: () => void }> = ({ onNavigateToAdmin }) => {
    const [attendees, setAttendees] = useState<Attendee[]>([
        { id: 1, name: '', birthDate: '', whatsapp: '', hasCell: 'nao', cellName: '' }
    ]);
    const [loading, setLoading] = useState(false);

    const PRICE_PER_PERSON = 30.00;

    const formatPhone = (value: string) => {
        // Remove tudo que não é número
        const numbers = value.replace(/\D/g, '');

        // Aplica a máscara (XX) XXXXX-XXXX
        if (numbers.length <= 2) {
            return numbers;
        } else if (numbers.length <= 7) {
            return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
        } else if (numbers.length <= 11) {
            return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
        }
        // Limita a 11 dígitos
        return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
    };

    const handleChange = (id: number, field: keyof Attendee, value: string) => {
        // Formata o telefone automaticamente
        if (field === 'whatsapp') {
            value = formatPhone(value);
        }
        setAttendees(attendees.map(a => a.id === id ? { ...a, [field]: value } : a));
    };

    const addAttendee = () => {
        setAttendees([...attendees, {
            id: Date.now(),
            name: '',
            birthDate: '',
            whatsapp: '',
            hasCell: 'nao',
            cellName: ''
        }]);
    };

    const removeAttendee = (id: number) => {
        if (attendees.length > 1) {
            setAttendees(attendees.filter(a => a.id !== id));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validação
        for (const attendee of attendees) {
            if (!attendee.name || !attendee.birthDate || !attendee.whatsapp) {
                alert('Por favor, preencha todos os campos obrigatórios de todas as pessoas');
                return;
            }
            if (attendee.hasCell === 'sim' && !attendee.cellName) {
                alert(`Por favor, informe o nome da célula para ${attendee.name}`);
                return;
            }
        }

        setLoading(true);
        console.log('📤 Enviando dados:', attendees);

        try {
            const response = await axios.post('/api/create-payment', {
                attendees,
                totalAmount: attendees.length * PRICE_PER_PERSON
            });
            console.log('✅ Resposta recebida:', response.data);

            if (response.data.init_point) {
                console.log('🔗 Redirecionando para:', response.data.init_point);
                window.location.href = response.data.init_point;
            } else {
                console.error('❌ init_point não encontrado na resposta');
                alert('Erro: Link de pagamento não foi gerado. Verifique o console.');
            }
        } catch (error: any) {
            console.error('❌ Erro ao processar inscrição:', error);
            console.error('Detalhes do erro:', error.response?.data);
            alert(`Erro ao processar inscrição: ${error.response?.data?.details || error.message}`);
        } finally {
            setLoading(false);
        }
    };

    const totalAmount = attendees.length * PRICE_PER_PERSON;

    return (
        <div className="bg-background-light dark:bg-background-dark font-display overflow-x-hidden min-h-screen relative">
            <div className="fixed left-0 top-0 bottom-0 w-4 md:w-16 checkered-pattern opacity-20 z-0"></div>
            <div className="fixed right-0 top-0 bottom-0 w-4 md:w-16 checkered-pattern opacity-20 z-0"></div>
            <div className="relative z-10 flex flex-col items-center">
                <header className="w-full max-w-5xl px-6 py-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <img
                            src="/images/rede-laranja-logo.png"
                            alt="Rede Laranja"
                            className="h-12 w-auto object-contain"
                            style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
                        />
                    </div>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full border-2 border-primary text-primary font-bold text-sm uppercase hover:bg-primary hover:text-white transition-all"
                        >
                            <span className="material-symbols-outlined text-lg">edit_note</span>
                            Formulário
                        </button>
                        {onNavigateToAdmin && (
                            <button
                                onClick={onNavigateToAdmin}
                                className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white font-bold text-sm uppercase hover:bg-[#ff6b35] transition-all shadow-lg"
                            >
                                <span className="material-symbols-outlined text-lg">admin_panel_settings</span>
                                Admin
                            </button>
                        )}
                    </div>
                </header>
                <main className="w-full max-w-4xl px-4 py-8 flex flex-col items-center relative">
                    <div className="absolute -left-20 top-20 w-40 h-40 opacity-40 rotate-12 floating-burger hidden lg:block">
                        <div className="w-full h-full bg-cover bg-center rounded-xl" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAwLxdatiRsB6-siyFahAPScTW-lLOocsl4E_0ASa3LkQqOIIjJnyRVk6s_7u54-7fl9rLOqch6LgaTFCE_Na2AmYgQkENBYrFO6uUkN-u12jzQXgeLAbI5ErDNR4yOs21FPuHZh_vgKvt8jE8LYvBQC_888IudyLgjDwHw_sT28SotKioQoRE8E_ECaF2vC84BYYT39Cc8atVYFlIfA_X_ZRt_u3c3eY9Nl_XN06oiDH4n-dW9dk1D8Y3sS7Mg3pcoyl_Fmnquhwg")' }}></div>
                    </div>
                    <div className="absolute -right-24 bottom-10 w-48 h-48 opacity-40 -rotate-12 floating-burger hidden lg:block">
                        <div className="w-full h-full bg-cover bg-center rounded-xl" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBa7Aa0BQnPYFqBb4iTMauY1RdGczRg_ser05BABHlx1HzvZfEkE_cK2nZtphFugEh-6kM8iYRQQaDIlXsA_18X3rgUKhzg37Y2MojM3istVdsol97zg3dvxLvvOTu-8SvNptIPmLKQ_f6PslZ4XJ6H-DqypcV3R5Is9gT495gXhQLZdwOFY8fRWK4TRVCqLpHWIaxVjFYQl2g-XuexVJCuxIPngErlbUqKibEtQwq7aje-Dtib7HRjRliBFW8JbZ9c4XoGF36LWns")' }}></div>
                    </div>
                    <div className="text-center mb-8 md:mb-12">
                        <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest mb-4 inline-block">14 de Março 2026</span>
                        <h1 className="text-primary text-4xl sm:text-6xl md:text-8xl font-black leading-tight md:leading-none bubbly-text mb-4 uppercase italic break-words">
                            Rodízio de <br /> Hambúrguer
                        </h1>
                        <p className="text-[#181111] dark:text-white/80 text-base md:text-xl font-medium max-w-2xl mx-auto px-4">
                            A experiência definitiva all-you-can-eat com estética Pop Art.
                            Prepare o seu apetite para os melhores blends da cidade!
                        </p>
                    </div>
                    <div className="w-full max-w-2xl bg-white dark:bg-[#2d1818] rounded-[2rem] shadow-2xl p-8 md:p-12 border-4 border-primary/10 relative">
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary text-white px-6 md:px-8 py-2 rounded-full font-bold shadow-md whitespace-nowrap text-[10px] md:text-sm">
                            GARANTA SUA VAGA AGORA
                        </div>
                        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                            {attendees.map((attendee, index) => (
                                <div key={attendee.id} className="relative border-2 border-primary/20 rounded-3xl p-6 bg-background-light/50 dark:bg-background-dark/50">
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className="text-[#181111] dark:text-white font-black uppercase text-sm flex items-center gap-2">
                                            <span className="material-symbols-outlined text-primary">person</span>
                                            Participante #{index + 1}
                                        </h3>
                                        {attendees.length > 1 && (
                                            <button
                                                type="button"
                                                onClick={() => removeAttendee(attendee.id)}
                                                className="text-red-500 hover:text-red-700 transition-colors"
                                            >
                                                <span className="material-symbols-outlined">close</span>
                                            </button>
                                        )}
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="flex flex-col gap-2">
                                            <label className="text-[#181111] dark:text-white text-xs font-bold uppercase tracking-wider ml-2">
                                                Nome Completo
                                            </label>
                                            <input
                                                type="text"
                                                value={attendee.name}
                                                onChange={(e) => handleChange(attendee.id, 'name', e.target.value)}
                                                className="w-full rounded-full border-2 border-gray-100 dark:border-gray-700 bg-white dark:bg-background-dark p-3 focus:ring-primary focus:border-primary transition-all font-medium text-[#181111] dark:text-white text-sm"
                                                placeholder="Nome completo"
                                                required
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-[#181111] dark:text-white text-xs font-bold uppercase tracking-wider ml-2">
                                                Data de Nascimento
                                            </label>
                                            <input
                                                type="date"
                                                value={attendee.birthDate}
                                                onChange={(e) => handleChange(attendee.id, 'birthDate', e.target.value)}
                                                className="w-full rounded-full border-2 border-gray-100 dark:border-gray-700 bg-white dark:bg-background-dark p-3 focus:ring-primary focus:border-primary transition-all font-medium text-[#181111] dark:text-white text-sm"
                                                required
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-[#181111] dark:text-white text-xs font-bold uppercase tracking-wider ml-2">
                                                WhatsApp
                                            </label>
                                            <input
                                                type="tel"
                                                value={attendee.whatsapp}
                                                onChange={(e) => handleChange(attendee.id, 'whatsapp', e.target.value)}
                                                className="w-full rounded-full border-2 border-gray-100 dark:border-gray-700 bg-white dark:bg-background-dark p-3 focus:ring-primary focus:border-primary transition-all font-medium text-[#181111] dark:text-white text-sm"
                                                placeholder="(00) 00000-0000"
                                                required
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-[#181111] dark:text-white text-xs font-bold uppercase tracking-wider ml-2">
                                                Faz parte de célula?
                                            </label>
                                            <select
                                                value={attendee.hasCell}
                                                onChange={(e) => handleChange(attendee.id, 'hasCell', e.target.value)}
                                                className="w-full rounded-full border-2 border-gray-100 dark:border-gray-700 bg-white dark:bg-background-dark p-3 focus:ring-primary focus:border-primary transition-all font-medium text-[#181111] dark:text-white text-sm"
                                            >
                                                <option value="nao">Não</option>
                                                <option value="sim">Sim</option>
                                            </select>
                                        </div>
                                        {attendee.hasCell === 'sim' && (
                                            <div className="flex flex-col gap-2 md:col-span-2">
                                                <label className="text-[#181111] dark:text-white text-xs font-bold uppercase tracking-wider ml-2">
                                                    Nome da Célula
                                                </label>
                                                <input
                                                    type="text"
                                                    value={attendee.cellName}
                                                    onChange={(e) => handleChange(attendee.id, 'cellName', e.target.value)}
                                                    className="w-full rounded-full border-2 border-gray-100 dark:border-gray-700 bg-white dark:bg-background-dark p-3 focus:ring-primary focus:border-primary transition-all font-medium text-[#181111] dark:text-white text-sm"
                                                    placeholder="Nome da célula"
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}

                            <button
                                type="button"
                                onClick={addAttendee}
                                className="w-full border-2 border-dashed border-primary/30 hover:border-primary/60 rounded-full py-4 text-primary font-bold uppercase text-sm flex items-center justify-center gap-2 transition-all hover:bg-primary/5"
                            >
                                <span className="material-symbols-outlined">add</span>
                                Adicionar Mais Uma Pessoa
                            </button>

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 py-6 border-t border-b border-gray-100 dark:border-gray-800">
                                <div className="text-center">
                                    <p className="text-xs text-gray-400 font-bold uppercase">Pessoas</p>
                                    <p className="text-2xl font-black text-[#181111] dark:text-white">{attendees.length}</p>
                                </div>
                                <div className="hidden md:block h-10 w-[1px] bg-gray-200 dark:bg-gray-700 mx-auto"></div>
                                <div className="text-center">
                                    <p className="text-xs text-gray-400 font-bold uppercase">Valor por Pessoa</p>
                                    <p className="text-2xl font-black text-primary">R$ {PRICE_PER_PERSON.toFixed(2)}</p>
                                </div>
                                <div className="hidden md:block h-10 w-[1px] bg-gray-200 dark:bg-gray-700 mx-auto"></div>
                                <div className="text-center sm:col-span-2 md:col-span-1">
                                    <p className="text-xs text-gray-400 font-bold uppercase">Total a Pagar</p>
                                    <p className="text-2xl md:text-3xl font-black text-primary italic">R$ {totalAmount.toFixed(2)}</p>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-mustard hover:bg-[#ffcf30] text-[#181111] py-5 md:py-6 rounded-full text-lg md:text-xl font-black uppercase tracking-tight shadow-[0_10px_0_#d4ac1d] active:shadow-none active:translate-y-[4px] transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? 'Processando...' : `Pagar R$ ${totalAmount.toFixed(2)}`}
                                <span className="material-symbols-outlined font-black">arrow_forward</span>
                            </button>
                        </form>
                    </div>
                    <div className="mt-12 flex flex-wrap justify-center gap-8 text-[#181111] dark:text-white/60">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">schedule</span>
                            <span className="font-bold uppercase text-xs tracking-widest">14/03/2026 às 19h</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">location_on</span>
                            <span className="font-bold uppercase text-xs tracking-widest">Igreja Batista Atitude - 368 Burguer</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">restaurant</span>
                            <span className="font-bold uppercase text-xs tracking-widest">Rodízio de Hambúrguer</span>
                        </div>
                    </div>
                </main>
                <footer className="w-full py-12 px-6 text-center mt-20">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">© 2026 Rodízio de Hambúrguer - Rede Laranja</p>
                    <div className="flex flex-col items-center gap-4">
                        <p className="text-sm font-bold text-[#181111] dark:text-white uppercase tracking-wide">Nos siga no Instagram</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="https://instagram.com/atitudelaranja"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-lg"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                                @atitudelaranja
                            </a>
                            <a
                                href="https://instagram.com/pracamilamiguel"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-lg"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                                @pracamilamiguel
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};