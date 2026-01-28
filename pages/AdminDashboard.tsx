import React from 'react';

export const AdminDashboard: React.FC = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex h-screen overflow-hidden">
            <aside className="w-64 flex-shrink-0 bg-white dark:bg-background-dark border-r border-slate-200 dark:border-slate-800 flex flex-col relative">
                <div className="absolute right-0 top-0 bottom-0 w-1 checkered-pattern opacity-20"></div>
                <div className="p-6 flex flex-col gap-8 h-full">
                    <div className="flex items-center gap-3">
                        <div className="size-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg">
                            <span className="material-symbols-outlined">lunch_dining</span>
                        </div>
                        <div>
                            <h1 className="text-lg font-black leading-tight tracking-tight uppercase italic text-primary">Diner Admin</h1>
                            <p className="text-xs text-slate-500 font-medium uppercase tracking-widest">Gestor de Eventos</p>
                        </div>
                    </div>
                    <nav className="flex flex-col gap-2 flex-grow">
                        <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/10 text-primary font-bold transition-all">
                            <span className="material-symbols-outlined">dashboard</span>
                            <span>Visão Geral</span>
                        </a>
                        <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium transition-all">
                            <span className="material-symbols-outlined">group</span>
                            <span>Inscrições</span>
                        </a>
                        <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium transition-all">
                            <span className="material-symbols-outlined">payments</span>
                            <span>Receita</span>
                        </a>
                        <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium transition-all">
                            <span className="material-symbols-outlined">confirmation_number</span>
                            <span>Promoções</span>
                        </a>
                    </nav>
                    <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                        <div className="flex items-center gap-3 p-2 bg-slate-50 dark:bg-slate-800 rounded-xl">
                            <div className="size-10 rounded-full bg-cover bg-center border-2 border-primary" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBKwI1EMb0oN8EUgNRZhiihdmN3FuYj1Bho_Hqy1hNwDkD0ZArXfz8pXDeM4MGssBR1OJ5nrLHy-RAuIkxdsAbRe-SAvzJYQn7xteizRlm3qPD_ENt71vmldNjzMOKigkFOi50xVVzrrVEnKDHn2S6-danIRpw78_1pEmeceATxzypUV5UzcH2z3kzZtU3kE8KqUfCRlgo5o-_BrPtdHDXHOlIz0zd6_mqtmtjAifOidrnxNS_pefg-jV-lt4PQnDZqfx1S8XbL9-A')" }}></div>
                            <div className="flex flex-col">
                                <span className="text-sm font-bold truncate">Rick O'Shea</span>
                                <span className="text-[10px] uppercase font-bold text-slate-400">Master Chef</span>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
            <main className="flex-1 overflow-y-auto relative">
                <div className="h-4 w-full checkered-pattern sticky top-0 z-10 shadow-sm"></div>
                <div className="max-w-6xl mx-auto p-8 flex flex-col gap-8">
                    <div className="flex flex-wrap items-end justify-between gap-4">
                        <div className="flex flex-col gap-1">
                            <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight italic">Visão Geral de Inscrições</h2>
                            <p className="text-slate-500 dark:text-slate-400 text-lg">Gerencie inscrições e pagamentos do evento em tempo real</p>
                        </div>
                        <div className="flex gap-3">
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="material-symbols-outlined text-slate-400 text-xl">search</span>
                                </div>
                                <input type="text" placeholder="Buscar convidados..." className="pl-10 pr-4 py-2 bg-white dark:bg-background-dark border-2 border-slate-200 dark:border-slate-700 rounded-xl focus:border-primary focus:ring-0 transition-all min-w-[280px]" />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-retro-green rounded-xl p-6 text-white shadow-xl relative overflow-hidden group">
                            <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-9xl">check_circle</span>
                            </div>
                            <div className="flex flex-col gap-1 relative z-10">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="material-symbols-outlined p-2 bg-white/20 rounded-lg">verified</span>
                                    <span className="text-sm font-black uppercase tracking-widest opacity-90">Confirmados</span>
                                </div>
                                <p className="text-5xl font-black">124</p>
                                <div className="flex items-center gap-1 text-sm font-bold bg-white/20 w-fit px-2 py-0.5 rounded-full mt-2">
                                    <span className="material-symbols-outlined text-xs">arrow_upward</span>
                                    +12% vs último evento
                                </div>
                            </div>
                        </div>
                        <div className="bg-mustard rounded-xl p-6 text-white shadow-xl relative overflow-hidden group">
                            <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-9xl">hourglass_empty</span>
                            </div>
                            <div className="flex flex-col gap-1 relative z-10">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="material-symbols-outlined p-2 bg-white/20 rounded-lg">pending</span>
                                    <span className="text-sm font-black uppercase tracking-widest opacity-90">Pendentes</span>
                                </div>
                                <p className="text-5xl font-black">42</p>
                                <div className="flex items-center gap-1 text-sm font-bold bg-white/20 w-fit px-2 py-0.5 rounded-full mt-2">
                                    <span className="material-symbols-outlined text-xs">arrow_downward</span>
                                    -5% esta semana
                                </div>
                            </div>
                        </div>
                        <div className="bg-primary rounded-xl p-6 text-white shadow-xl relative overflow-hidden group">
                            <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-9xl">point_of_sale</span>
                            </div>
                            <div className="flex flex-col gap-1 relative z-10">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="material-symbols-outlined p-2 bg-white/20 rounded-lg">payments</span>
                                    <span className="text-sm font-black uppercase tracking-widest opacity-90">Total Arrecadado</span>
                                </div>
                                <p className="text-4xl font-black">R$ 5.580,00</p>
                                <div className="flex items-center gap-1 text-sm font-bold bg-white/20 w-fit px-2 py-0.5 rounded-full mt-2">
                                    <span className="material-symbols-outlined text-xs">trending_up</span>
                                    Meta atingida!
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-background-dark rounded-xl shadow-lg border-2 border-slate-100 dark:border-slate-800 overflow-hidden">
                        <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-800 flex flex-wrap justify-between items-center bg-slate-50/50 dark:bg-slate-800/50 gap-4">
                            <h3 className="text-xl font-black text-slate-800 dark:text-white uppercase tracking-tight italic">Lista de Inscrições</h3>
                            <div className="flex items-center gap-4">
                                <button className="flex items-center gap-2 bg-mustard hover:brightness-110 text-black px-6 py-2.5 rounded-lg font-black text-sm uppercase italic tracking-tighter hard-shadow border-2 border-black transition-all">
                                    <span className="material-symbols-outlined text-lg">table_view</span>
                                    EXPORTAR PARA EXCEL
                                </button>
                                <div className="flex gap-2">
                                    <button className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors">
                                        <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">filter_list</span>
                                    </button>
                                    <button className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors">
                                        <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">more_vert</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left font-poppins border-collapse">
                                <thead>
                                    <tr className="text-slate-400 text-xs uppercase tracking-widest border-b border-slate-100 dark:border-slate-800">
                                        <th className="px-6 py-4 font-bold">Nome</th>
                                        <th className="px-6 py-4 font-bold">Status</th>
                                        <th className="px-6 py-4 font-bold">Valor</th>
                                        <th className="px-6 py-4 font-bold">Data</th>
                                        <th className="px-6 py-4 font-bold text-center">Ações</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors group">
                                        <td className="px-6 py-4 font-medium text-slate-900 dark:text-slate-100">
                                            <div className="flex items-center gap-3">
                                                <div className="size-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-bold text-xs">JD</div>
                                                João da Silva
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="inline-flex items-center gap-1 bg-retro-green text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-full shadow-sm">
                                                <span className="material-symbols-outlined text-xs">verified</span>
                                                Pago
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-slate-600 dark:text-slate-400 font-bold">R$ 45,00</td>
                                        <td className="px-6 py-4 text-slate-500 dark:text-slate-500 text-sm">24 Out, 2023</td>
                                        <td className="px-6 py-4 text-center">
                                            <button className="text-slate-400 hover:text-primary transition-colors">
                                                <span className="material-symbols-outlined">edit_square</span>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors group">
                                        <td className="px-6 py-4 font-medium text-slate-900 dark:text-slate-100">
                                            <div className="flex items-center gap-3">
                                                <div className="size-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-bold text-xs">MM</div>
                                                Maria Souza
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="inline-flex items-center gap-1 bg-mustard text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-full shadow-sm">
                                                <span className="material-symbols-outlined text-xs">schedule</span>
                                                Pendente
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-slate-600 dark:text-slate-400 font-bold">R$ 45,00</td>
                                        <td className="px-6 py-4 text-slate-500 dark:text-slate-500 text-sm">25 Out, 2023</td>
                                        <td className="px-6 py-4 text-center">
                                            <button className="text-slate-400 hover:text-primary transition-colors">
                                                <span className="material-symbols-outlined">edit_square</span>
                                            </button>
                                        </td>
                                    </tr>
                                    {/* More rows omitted for brevity, following pattern */}
                                </tbody>
                            </table>
                        </div>
                        <div className="px-6 py-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center text-sm font-medium">
                            <span className="text-slate-500">Mostrando 5 de 166 inscrições</span>
                            <div className="flex gap-2">
                                <button className="px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-50">Anterior</button>
                                <button className="px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800">Próximo</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8 h-20 w-full checkered-pattern opacity-10 flex items-center justify-center">
                    <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-900/50">Grelhando desde 1954</p>
                </div>
            </main>
        </div>
    );
};