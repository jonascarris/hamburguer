import React from 'react';

export const AdminCoupons: React.FC = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-[#181711] dark:text-white min-h-screen">
            <header className="sticky top-0 z-50 bg-white dark:bg-[#2d2a1a] border-b-4 border-[#181711] px-6 lg:px-20 py-4 flex items-center justify-between">
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-3">
                        <div className="bg-primary-yellow p-2 rounded-lg border-2 border-[#181711]">
                            <span className="material-symbols-outlined text-[#181711] text-3xl font-bold">lunch_dining</span>
                        </div>
                        <h1 className="text-2xl font-black uppercase tracking-tighter italic">Diner Admin</h1>
                    </div>
                    <nav className="hidden md:flex items-center gap-6">
                        <a href="#" className="text-sm font-bold uppercase hover:text-primary-yellow transition-colors">Painel</a>
                        <a href="#" className="text-sm font-bold uppercase border-b-4 border-primary-yellow">Cupons</a>
                        <a href="#" className="text-sm font-bold uppercase hover:text-primary-yellow transition-colors">Pedidos</a>
                        <a href="#" className="text-sm font-bold uppercase hover:text-primary-yellow transition-colors">Configurações</a>
                    </nav>
                </div>
                <div className="flex items-center gap-4">
                    <div className="hidden sm:flex items-center bg-[#f5f4f0] dark:bg-[#181711] border-2 border-[#181711] rounded-full px-4 py-1">
                        <span className="material-symbols-outlined text-[#8a8360]">search</span>
                        <input type="text" placeholder="Buscar cupom..." className="bg-transparent border-none focus:ring-0 text-sm w-40" />
                    </div>
                    <div className="size-10 rounded-full border-2 border-[#181711] overflow-hidden bg-primary-yellow flex items-center justify-center">
                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoaTeHzx_V3tUNpqC8mlzpcmWWmLgAANMbkgSCPTt1lF9XLrsS_yyAp66uDA4Ob1dLTdHwwPtIYtYAFcKrYEOe6k6WePgF8u6kefzo6-46o1Ttx7LzrXw_3KSH4NILhnDGX4l6gsbRZfE7RJ6l8_cPQvPsmKvS7MExxieGaJ6wZ6o1eiEZaJFGXVbz7xryFG3NqTNVbGAKlyJLvDr43JjKIrfOxPxIwffbQZFoJQilegJm2lm0FWFnjCjFlgnPFcngp6EVaRch_AY" alt="Avatar do administrador" />
                    </div>
                </div>
            </header>
            <div className="h-4 checkered-border border-b-2 border-[#181711]"></div>
            <main className="max-w-6xl mx-auto px-6 py-10">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
                    <div>
                        <span className="bg-secondary-red text-white text-xs font-black px-3 py-1 rounded-full uppercase mb-2 inline-block">Evento Rodízio 2024</span>
                        <h2 className="text-5xl font-black uppercase tracking-tight">Gerenciamento de Cupons</h2>
                        <p className="text-lg text-[#8a8360] mt-2">Crie e controle os códigos promocionais do seu evento.</p>
                    </div>
                    <button className="bg-white border-4 border-[#181711] hover:bg-gray-50 px-6 py-3 rounded-full font-black uppercase flex items-center gap-2 transition-transform hover:-translate-y-1 active:translate-y-0 text-black">
                        <span className="material-symbols-outlined">analytics</span>
                        Ver Estatísticas
                    </button>
                </div>
                <section className="mb-16">
                    <div className="sticker-card bg-white dark:bg-[#2d2a1a] rounded-xl p-8 relative overflow-hidden">
                        <div className="absolute -right-8 -top-8 size-32 bg-primary-yellow/10 rounded-full flex items-center justify-center -rotate-12">
                            <span className="material-symbols-outlined text-primary-yellow text-6xl opacity-50">confirmation_number</span>
                        </div>
                        <h3 className="text-2xl font-black uppercase mb-6 flex items-center gap-2">
                            <span className="material-symbols-outlined text-secondary-red">add_circle</span>
                            Gerar Novo Cupom
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-black uppercase ml-2">Código do Cupom</label>
                                <input type="text" placeholder="Ex: BURGER10" className="h-14 bg-white dark:bg-[#181711] border-4 border-[#181711] rounded-xl px-4 font-bold uppercase placeholder:text-gray-300 focus:ring-primary-yellow focus:border-primary-yellow" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-black uppercase ml-2">Desconto (%)</label>
                                <input type="number" placeholder="Ex: 15" className="h-14 bg-white dark:bg-[#181711] border-4 border-[#181711] rounded-xl px-4 font-bold focus:ring-primary-yellow focus:border-primary-yellow" />
                            </div>
                            <div>
                                <button className="w-full h-14 bg-primary-yellow text-[#181711] border-4 border-[#181711] rounded-xl font-black uppercase text-lg shadow-[4px_4px_0px_#181711] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
                                    GERAR NOVO CUPOM
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-2xl font-black uppercase">Cupons Ativos</h3>
                        <div className="flex gap-2">
                            <button className="p-2 border-2 border-[#181711] rounded-lg bg-white text-black"><span className="material-symbols-outlined">filter_list</span></button>
                            <button className="p-2 border-2 border-[#181711] rounded-lg bg-white text-black"><span className="material-symbols-outlined">download</span></button>
                        </div>
                    </div>
                    <div className="sticker-card bg-white dark:bg-[#2d2a1a] rounded-xl overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-[#f5f4f0] dark:bg-[#181711] border-b-4 border-[#181711]">
                                        <th className="p-5 font-black uppercase text-sm">Código</th>
                                        <th className="p-5 font-black uppercase text-sm">Desconto</th>
                                        <th className="p-5 font-black uppercase text-sm text-center">Uso (Gasto/Total)</th>
                                        <th className="p-5 font-black uppercase text-sm text-center">Status</th>
                                        <th className="p-5 font-black uppercase text-sm text-right">Ações</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y-2 divide-[#f5f4f0] dark:divide-[#181711]">
                                    <tr className="hover:bg-primary-yellow/5 transition-colors">
                                        <td className="p-5">
                                            <span className="font-mono font-bold text-lg bg-[#181711] text-primary-yellow px-3 py-1 rounded-lg">RETRO50</span>
                                        </td>
                                        <td className="p-5 font-bold text-xl">50%</td>
                                        <td className="p-5">
                                            <div className="flex flex-col items-center gap-1">
                                                <div className="w-32 bg-gray-200 rounded-full h-3 border-2 border-[#181711] overflow-hidden">
                                                    <div className="bg-secondary-red h-full" style={{ width: '75%' }}></div>
                                                </div>
                                                <span className="text-xs font-bold uppercase">75 / 100</span>
                                            </div>
                                        </td>
                                        <td className="p-5 text-center">
                                            <label className="relative inline-flex items-center cursor-pointer">
                                                <input type="checkbox" className="sr-only peer" defaultChecked />
                                                <div className="w-14 h-8 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-primary-yellow border-2 border-[#181711]"></div>
                                            </label>
                                        </td>
                                        <td className="p-5 text-right">
                                            <button className="hover:text-secondary-red transition-colors"><span className="material-symbols-outlined">edit</span></button>
                                            <button className="hover:text-secondary-red transition-colors ml-3"><span className="material-symbols-outlined">delete</span></button>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-primary-yellow/5 transition-colors">
                                        <td className="p-5">
                                            <span className="font-mono font-bold text-lg bg-[#181711] text-primary-yellow px-3 py-1 rounded-lg">MILKSHAKE20</span>
                                        </td>
                                        <td className="p-5 font-bold text-xl">20%</td>
                                        <td className="p-5">
                                            <div className="flex flex-col items-center gap-1">
                                                <div className="w-32 bg-gray-200 rounded-full h-3 border-2 border-[#181711] overflow-hidden">
                                                    <div className="bg-primary-yellow h-full" style={{ width: '20%' }}></div>
                                                </div>
                                                <span className="text-xs font-bold uppercase">10 / 50</span>
                                            </div>
                                        </td>
                                        <td className="p-5 text-center">
                                            <label className="relative inline-flex items-center cursor-pointer">
                                                <input type="checkbox" className="sr-only peer" defaultChecked />
                                                <div className="w-14 h-8 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-primary-yellow border-2 border-[#181711]"></div>
                                            </label>
                                        </td>
                                        <td className="p-5 text-right">
                                            <button className="hover:text-secondary-red transition-colors"><span className="material-symbols-outlined">edit</span></button>
                                            <button className="hover:text-secondary-red transition-colors ml-3"><span className="material-symbols-outlined">delete</span></button>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-primary-yellow/5 transition-colors opacity-60 grayscale">
                                        <td className="p-5">
                                            <span className="font-mono font-bold text-lg bg-gray-400 text-white px-3 py-1 rounded-lg">EXPIRADO10</span>
                                        </td>
                                        <td className="p-5 font-bold text-xl">10%</td>
                                        <td className="p-5">
                                            <div className="flex flex-col items-center gap-1">
                                                <div className="w-32 bg-gray-200 rounded-full h-3 border-2 border-[#181711] overflow-hidden">
                                                    <div className="bg-gray-400 h-full" style={{ width: '100%' }}></div>
                                                </div>
                                                <span className="text-xs font-bold uppercase">50 / 50</span>
                                            </div>
                                        </td>
                                        <td className="p-5 text-center">
                                            <label className="relative inline-flex items-center cursor-pointer">
                                                <input type="checkbox" className="sr-only peer" />
                                                <div className="w-14 h-8 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-primary-yellow border-2 border-[#181711]"></div>
                                            </label>
                                        </td>
                                        <td className="p-5 text-right">
                                            <button className="hover:text-secondary-red transition-colors"><span className="material-symbols-outlined">edit</span></button>
                                            <button className="hover:text-secondary-red transition-colors ml-3"><span className="material-symbols-outlined">delete</span></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="p-4 bg-[#f5f4f0] dark:bg-[#181711] border-t-4 border-[#181711] flex justify-center gap-2">
                            <button className="px-3 py-1 border-2 border-[#181711] rounded-lg bg-white text-black font-bold hover:bg-primary-yellow">1</button>
                            <button className="px-3 py-1 border-2 border-[#181711] rounded-lg bg-white text-black font-bold hover:bg-primary-yellow">2</button>
                            <button className="px-3 py-1 border-2 border-[#181711] rounded-lg bg-white text-black font-bold hover:bg-primary-yellow">3</button>
                        </div>
                    </div>
                </section>
                <div className="mt-16 flex flex-wrap justify-around gap-8 opacity-20 pointer-events-none select-none">
                    <div className="flex flex-col items-center">
                        <span className="material-symbols-outlined text-8xl">icecream</span>
                        <span className="font-black uppercase tracking-widest text-xl mt-2">Tasty</span>
                    </div>
                    <div className="flex flex-col items-center rotate-12">
                        <span className="material-symbols-outlined text-8xl">local_pizza</span>
                        <span className="font-black uppercase tracking-widest text-xl mt-2">Crispy</span>
                    </div>
                    <div className="flex flex-col items-center -rotate-6">
                        <span className="material-symbols-outlined text-8xl">lunch_dining</span>
                        <span className="font-black uppercase tracking-widest text-xl mt-2">Juicy</span>
                    </div>
                    <div className="flex flex-col items-center rotate-3">
                        <span className="material-symbols-outlined text-8xl">local_drink</span>
                        <span className="font-black uppercase tracking-widest text-xl mt-2">Fresh</span>
                    </div>
                </div>
            </main>
            <footer className="mt-auto">
                <div className="h-4 checkered-border border-t-2 border-[#181711]"></div>
                <div className="bg-white dark:bg-[#181711] py-8 px-6 border-t-4 border-[#181711]">
                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="font-bold text-sm">© 2024 Rodízio de Hambúrguer - Painel Admin Retro</p>
                        <div className="flex gap-4">
                            <span className="material-symbols-outlined cursor-pointer hover:text-primary-yellow">social_leaderboard</span>
                            <span className="material-symbols-outlined cursor-pointer hover:text-primary-yellow">camera</span>
                            <span className="material-symbols-outlined cursor-pointer hover:text-primary-yellow">alternate_email</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};