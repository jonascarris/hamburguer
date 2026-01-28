import React from 'react';

export const RegistrationDetails: React.FC = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-[#181111] dark:text-white min-h-screen relative overflow-x-hidden">
            <div className="fixed inset-0 checker-pattern pointer-events-none"></div>
            <div className="fixed -top-20 -left-20 opacity-20 rotate-12 pointer-events-none">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAi7Y-ZHDzW40adC5X-KAprCTUXYCnXHN24ILqBoqCKO93v79RQJEJXBNj9nlUGNGVSWVWELVmfQINRgDCzlzt75vS23Rt-KBzYG85vgPNho0LhkO41O5wOEMbCTJ9TDvuvHQ08jjIOOCvpI8L4hjyc38t8z4Od_E5YmxQDd6V1bL9rrJ9gJq0w-JIL5yhe73duNlQvs2tCHfS7sU-9yf_Qijuj5AAu3wYiV8OYt8l5P5VVNN8FyMEP57qdvJce9ayEE0Cy7xS_lPg" className="w-64 h-64 object-cover rounded-full blur-sm" alt="Hambúrguer suculento com desfoque de movimento" />
            </div>
            <div className="fixed -bottom-20 -right-20 opacity-20 -rotate-12 pointer-events-none">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAn89U0cFTxjDoDS4ZwabvC7GsIjN5rzxQPa4nu8D19nNL6bKAXi0U7l313BdxvlVsro6jEHS2dswubIvHNodXKALy_CWSwKvqEtTySFd-5E2QsLlLcjdIYPQsL63ecKiG4GNEsjqygWQJirXdmWXFFl6pk9eYrFOs682AlpI25jMPBgxS8_RAdGA4_EioZ6xqJx5UlDAkUA1IKIH79qXVt0Nnm3aS-HqDMAvTXHirtIVuCu_rn0fIIFRm_0b6MNCHQ2H49qBMvDnY" className="w-80 h-80 object-cover rounded-full blur-[2px]" alt="Vista superior de hambúrguer e batatas fritas" />
            </div>
            <div className="relative flex flex-col min-h-screen">
                <header className="w-full border-b border-solid border-[#f5f0f0] dark:border-[#332222] bg-white/80 dark:bg-background-dark/80 backdrop-blur-md sticky top-0 z-50">
                    <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 py-4">
                        <div className="flex items-center gap-4">
                            <div className="text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" className="size-8">
                                    <g clipPath="url(#clip0_6_330)">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" />
                                    </g>
                                    <defs><clipPath id="clip0_6_330"><rect width="48" height="48" fill="white" /></clipPath></defs>
                                </svg>
                            </div>
                            <h2 className="text-xl font-black leading-tight tracking-tight uppercase italic">Rodízio <span className="text-primary">Retro</span></h2>
                        </div>
                        <div className="flex items-center gap-8">
                            <nav className="hidden md:flex items-center gap-8">
                                <a href="#" className="text-sm font-bold uppercase tracking-wider hover:text-primary transition-colors">Início</a>
                                <a href="#" className="text-sm font-bold uppercase tracking-wider hover:text-primary transition-colors">Cardápio</a>
                                <a href="#" className="text-sm font-bold uppercase tracking-wider hover:text-primary transition-colors">Sobre</a>
                            </nav>
                            <button className="bg-[#f5f0f0] dark:bg-primary/20 p-2.5 rounded-xl text-primary flex items-center justify-center">
                                <span className="material-symbols-outlined">shopping_bag</span>
                            </button>
                            <div className="size-10 rounded-full border-2 border-primary bg-cover bg-center bg-no-repeat aspect-square" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA-IFb0eQ5IsWE_axz9luRIH7MNM_mKUKPo3WRM2J8rAXtCt2Jur2uAt5RAKvUPbXgWGPzSdzdiD5JO91qoI5dbNHfGMF9D9FHW8h41JIElDf9vJchpU2bUWoC2tFfgCdwQaw7xf198sKrYVFOziuYM8Udp0ROTQyyq4DwxJzG-d03L1-Z30KGoSM86UdOxV_IyHmweME3lofS5TZ5jZYAkN-piJ8G84f9X5QrYhuukV1Us3vigad1m5ZPYLaB5_axTlQmtUzSt5QQ")' }}></div>
                        </div>
                    </div>
                </header>
                <main className="flex-1 flex flex-col items-center py-10 px-4">
                    <div className="max-w-[800px] w-full">
                        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 bg-white dark:bg-background-dark p-3 rounded-full shadow-sm">
                            <a href="#" className="text-[#8a6060] dark:text-gray-400 text-sm font-bold uppercase tracking-tighter">Seleção</a>
                            <span className="material-symbols-outlined text-sm text-[#8a6060]">chevron_right</span>
                            <a href="#" className="text-primary text-sm font-extrabold uppercase tracking-tighter">Dados dos Comilões</a>
                            <span className="material-symbols-outlined text-sm text-[#8a6060]">chevron_right</span>
                            <span className="text-gray-400 text-sm font-bold uppercase tracking-tighter">Pagamento</span>
                        </div>
                        <div className="text-center mb-10">
                            <h1 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter text-[#181111] dark:text-white mb-2">
                                Quem vai <span className="text-primary">Encher o Bucho?</span>
                            </h1>
                            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                                Insira os detalhes de cada participante para prepararmos a chapa!
                            </p>
                        </div>
                        <div className="space-y-8 mb-12">
                            {/* Participant 1 */}
                            <div className="bg-white dark:bg-[#2d1a1a] p-8 rounded-xl diner-border relative overflow-hidden group">
                                <div className="absolute top-0 right-0 bg-primary text-white font-black px-6 py-2 rounded-bl-xl uppercase text-sm tracking-widest italic">
                                    Participante #01
                                </div>
                                <div className="flex flex-col md:flex-row gap-6 mt-4">
                                    <div className="flex-1 space-y-2">
                                        <label className="block text-xs font-black uppercase text-gray-500 tracking-widest">Quem é o comilão?</label>
                                        <div className="relative">
                                            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary">person</span>
                                            <input type="text" className="w-full pl-12 pr-4 py-4 rounded-lg bg-background-light dark:bg-[#3d2a2a] border-2 border-transparent focus:border-primary focus:ring-0 transition-all font-bold" placeholder="Nome completo" />
                                        </div>
                                    </div>
                                    <div className="flex-1 space-y-2">
                                        <label className="block text-xs font-black uppercase text-gray-500 tracking-widest">De qual Célula você faz parte?</label>
                                        <div className="relative">
                                            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary">groups</span>
                                            <input type="text" className="w-full pl-12 pr-4 py-4 rounded-lg bg-background-light dark:bg-[#3d2a2a] border-2 border-transparent focus:border-primary focus:ring-0 transition-all font-bold" placeholder="Ex: Célula Atos 2" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Participant 2 */}
                            <div className="bg-white dark:bg-[#2d1a1a] p-8 rounded-xl diner-border relative overflow-hidden group opacity-90 hover:opacity-100 transition-opacity">
                                <div className="absolute top-0 right-0 bg-primary text-white font-black px-6 py-2 rounded-bl-xl uppercase text-sm tracking-widest italic">
                                    Participante #02
                                </div>
                                <div className="flex flex-col md:flex-row gap-6 mt-4">
                                    <div className="flex-1 space-y-2">
                                        <label className="block text-xs font-black uppercase text-gray-500 tracking-widest">Quem é o comilão?</label>
                                        <div className="relative">
                                            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary">person</span>
                                            <input type="text" className="w-full pl-12 pr-4 py-4 rounded-lg bg-background-light dark:bg-[#3d2a2a] border-2 border-transparent focus:border-primary focus:ring-0 transition-all font-bold" placeholder="Nome completo" />
                                        </div>
                                    </div>
                                    <div className="flex-1 space-y-2">
                                        <label className="block text-xs font-black uppercase text-gray-500 tracking-widest">De qual Célula você faz parte?</label>
                                        <div className="relative">
                                            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary">groups</span>
                                            <input type="text" className="w-full pl-12 pr-4 py-4 rounded-lg bg-background-light dark:bg-[#3d2a2a] border-2 border-transparent focus:border-primary focus:ring-0 transition-all font-bold" placeholder="Ex: Célula Atos 2" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Participant 3 */}
                            <div className="bg-white dark:bg-[#2d1a1a] p-8 rounded-xl diner-border relative overflow-hidden group opacity-80 hover:opacity-100 transition-opacity">
                                <div className="absolute top-0 right-0 bg-primary text-white font-black px-6 py-2 rounded-bl-xl uppercase text-sm tracking-widest italic">
                                    Participante #03
                                </div>
                                <div className="flex flex-col md:flex-row gap-6 mt-4">
                                    <div className="flex-1 space-y-2">
                                        <label className="block text-xs font-black uppercase text-gray-500 tracking-widest">Quem é o comilão?</label>
                                        <div className="relative">
                                            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary">person</span>
                                            <input type="text" className="w-full pl-12 pr-4 py-4 rounded-lg bg-background-light dark:bg-[#3d2a2a] border-2 border-transparent focus:border-primary focus:ring-0 transition-all font-bold" placeholder="Nome completo" />
                                        </div>
                                    </div>
                                    <div className="flex-1 space-y-2">
                                        <label className="block text-xs font-black uppercase text-gray-500 tracking-widest">De qual Célula você faz parte?</label>
                                        <div className="relative">
                                            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary">groups</span>
                                            <input type="text" className="w-full pl-12 pr-4 py-4 rounded-lg bg-background-light dark:bg-[#3d2a2a] border-2 border-transparent focus:border-primary focus:ring-0 transition-all font-bold" placeholder="Ex: Célula Atos 2" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sticky bottom-8 w-full z-40">
                            <div className="bg-white dark:bg-background-dark p-6 rounded-2xl shadow-2xl border-4 border-black flex flex-col md:flex-row items-center justify-between gap-6">
                                <div className="flex items-center gap-6">
                                    <div className="bg-primary/10 p-4 rounded-xl flex flex-col items-center">
                                        <span className="text-xs font-black uppercase text-primary">Total (3)</span>
                                        <span className="text-2xl font-black text-[#181111] dark:text-white leading-none">R$ 147,00</span>
                                    </div>
                                    <div className="hidden md:block">
                                        <p className="text-sm font-bold text-gray-500">Rodízio Livre + Bebida</p>
                                        <p className="text-xs uppercase tracking-widest font-black text-primary">Pagamento Seguro</p>
                                    </div>
                                </div>
                                <button className="w-full md:w-auto flex items-center justify-center gap-3 bg-primary hover:bg-red-700 text-white px-10 py-5 rounded-xl font-black uppercase italic tracking-widest shadow-[4px_4px_0px_0px_#000] active:translate-y-1 active:shadow-none transition-all">
                                    Finalizar Pedido
                                    <span className="material-symbols-outlined">arrow_forward</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
                <footer className="w-full py-12 px-6 mt-10 bg-white dark:bg-background-dark border-t border-solid border-[#f5f0f0] dark:border-[#332222]">
                    <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-4">
                        <div className="text-primary opacity-50">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" className="size-6">
                                <g clipPath="url(#clip0_6_330)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" />
                                </g>
                            </svg>
                        </div>
                        <p className="text-sm font-bold text-gray-400">© 2024 Rodízio de Hambúrguer Retro - Igreja das Nações</p>
                    </div>
                </footer>
            </div>
        </div>
    );
};