import React from 'react';

export const Waitlist: React.FC = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display overflow-x-hidden min-h-screen relative">
            <div className="fixed left-0 top-0 bottom-0 w-8 md:w-16 checkered-pattern opacity-10 z-0"></div>
            <div className="fixed right-0 top-0 bottom-0 w-8 md:w-16 checkered-pattern opacity-10 z-0"></div>
            <div className="w-full bg-[#181111] py-2 relative z-50 overflow-hidden border-b-4 border-mustard">
                <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-4 md:gap-8">
                    <div className="hidden md:flex items-center gap-2">
                        <span className="bg-primary text-white font-black px-3 py-0.5 rounded italic text-xs uppercase tracking-tighter sticker-badge">SOLD OUT</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="text-mustard font-black text-sm uppercase tracking-widest hidden sm:block">Novas vagas em breve!</span>
                        <div className="flex items-center gap-3 font-pixel text-3xl md:text-4xl text-white timer-glow tracking-widest">
                            <span>00:00:00:00</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-mustard">sentiment_very_dissatisfied</span>
                    </div>
                </div>
            </div>
            <div className="relative z-10 flex flex-col items-center">
                <header className="w-full max-w-5xl px-6 py-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="bg-primary p-2 rounded-full text-white">
                            <span className="material-symbols-outlined text-2xl">restaurant</span>
                        </div>
                        <h2 className="text-[#181111] dark:text-white text-xl font-extrabold tracking-tighter uppercase">Diner Pop</h2>
                    </div>
                    <nav className="hidden md:flex items-center gap-8">
                        <a href="#" className="text-[#181111] dark:text-gray-300 text-sm font-bold uppercase hover:text-primary transition-colors">O Evento</a>
                        <a href="#" className="text-[#181111] dark:text-gray-300 text-sm font-bold uppercase hover:text-primary transition-colors">Cardápio</a>
                        <a href="#" className="text-[#181111] dark:text-gray-300 text-sm font-bold uppercase hover:text-primary transition-colors">Localização</a>
                    </nav>
                    <button className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-bold uppercase shadow-lg hover:scale-105 transition-transform">
                        Entrar
                    </button>
                </header>
                <main className="w-full max-w-4xl px-4 py-8 flex flex-col items-center relative">
                    <div className="text-center mb-8">
                        <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-4 inline-block italic">Esgotado!</span>
                        <h1 className="text-primary text-6xl md:text-8xl font-black leading-none bubbly-text mb-4 uppercase italic">
                            Rodízio de <br /> Hambúrguer
                        </h1>
                    </div>
                    <div className="w-full max-w-2xl bg-white dark:bg-[#2d1818] rounded-[2rem] shadow-2xl p-8 md:p-12 border-4 border-primary/10 relative overflow-hidden">
                        <div className="flex flex-col items-center text-center">
                            <div className="relative w-64 h-64 md:w-80 md:h-80 mb-8 cartoon-shadow">
                                <div className="absolute inset-0 bg-cover bg-center rounded-2xl rotate-3" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDkDQBjR8S7unzFzmH2adCOqx1qxA4bD-PfQ5TyA9-D5WQaQsaGYBcxCuDS8pLUCbnL4xJ4z5fOepuiW4G0UPk7M4_BraR0MTl9kGtCRq0gFDUNFpqeAsxYVEKq7Q_aUHhnFyMSEn-T0FB93bUrt1tqbk3wbBUOKV3SFZO6gC_56c_YcjE_Kk0QJwdSmW3oIdxWaR_zhyWxaQZ598Tqo6XbJXvg0_Er-sLQ4u6Tgh7cq7DxWIMj0oiEJQtxV5sHTLhBaAEcaACcEl4")', filter: 'grayscale(0.5) contrast(1.1)' }}></div>
                                <div className="absolute inset-0 bg-black/20 rounded-2xl rotate-3"></div>
                                <div className="absolute top-1/4 left-1/4 flex gap-8 z-20">
                                    <span className="material-symbols-outlined text-white text-5xl opacity-80">sentiment_dissatisfied</span>
                                </div>
                                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white border-4 border-[#181111] px-6 py-3 sticker-badge z-30">
                                    <span className="text-2xl font-black text-[#181111] italic whitespace-nowrap uppercase tracking-tighter">VOLTAMOS EM BREVE!</span>
                                </div>
                            </div>
                            <div className="max-w-md mx-auto">
                                <h3 className="text-2xl font-black text-[#181111] dark:text-white uppercase italic mb-2 tracking-tight">Perdeu o horário?</h3>
                                <p className="text-gray-600 dark:text-gray-400 font-medium mb-8">As vagas para esta edição voaram! Entre na lista de espera para ser o primeiro a saber da próxima data.</p>
                                <form className="space-y-4">
                                    <div className="flex flex-col gap-2 text-left">
                                        <label className="text-[#181111] dark:text-white text-xs font-black uppercase tracking-widest ml-4">Me avise da próxima!</label>
                                        <div className="relative">
                                            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary">mail</span>
                                            <input type="text" className="w-full rounded-full border-2 border-gray-100 dark:border-gray-700 bg-background-light dark:bg-background-dark py-4 pl-12 pr-4 focus:ring-primary focus:border-primary transition-all font-bold text-[#181111] dark:text-white" placeholder="Seu melhor e-mail ou WhatsApp" />
                                        </div>
                                    </div>
                                    <button type="button" className="w-full bg-mustard hover:bg-[#ffcf30] text-[#181111] py-5 px-8 rounded-full text-lg md:text-xl font-black uppercase tracking-tight shadow-[0_8px_0_#d4ac1d] active:shadow-none active:translate-y-[4px] transition-all flex items-center justify-center gap-3 group">
                                        QUERO SER AVISADO
                                        <span className="material-symbols-outlined font-black group-hover:translate-x-1 transition-transform">notifications_active</span>
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 checkered-banner opacity-20 rotate-12"></div>
                        <div className="absolute -top-6 -left-6 w-24 h-24 checkered-banner opacity-20 -rotate-12"></div>
                    </div>
                    <div className="mt-12 flex flex-wrap justify-center gap-8 text-[#181111] dark:text-white/60">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">schedule</span>
                            <span className="font-bold uppercase text-xs tracking-widest">Sábado às 19h</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">location_on</span>
                            <span className="font-bold uppercase text-xs tracking-widest">Av. Principal, 1234 - Diner Central</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">local_pizza</span>
                            <span className="font-bold uppercase text-xs tracking-widest">+20 tipos de burgers</span>
                        </div>
                    </div>
                </main>
                <footer className="w-full py-12 px-6 text-center border-t border-gray-200 dark:border-gray-800 mt-20">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">© 2024 Rodízio de Hambúrguer - Todos os direitos reservados</p>
                    <div className="flex justify-center gap-4 mt-4">
                        <a href="#" className="text-gray-400 hover:text-primary transition-colors"><span className="material-symbols-outlined">share</span></a>
                        <a href="#" className="text-gray-400 hover:text-primary transition-colors"><span className="material-symbols-outlined">thumb_up</span></a>
                        <a href="#" className="text-gray-400 hover:text-primary transition-colors"><span className="material-symbols-outlined">camera_enhance</span></a>
                    </div>
                </footer>
            </div>
        </div>
    );
};