import React, { useState } from 'react';

export const GroupBooking: React.FC = () => {
    const [qty, setQty] = useState(1);
    const price = 30;

    return (
        <div className="bg-background-light dark:bg-background-dark font-display overflow-x-hidden min-h-screen relative">
            <div className="fixed left-0 top-0 bottom-0 w-8 md:w-16 checkered-pattern opacity-20 z-0"></div>
            <div className="fixed right-0 top-0 bottom-0 w-8 md:w-16 checkered-pattern opacity-20 z-0"></div>
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
                    <div className="absolute -left-20 top-20 w-40 h-40 opacity-40 rotate-12 floating-burger hidden lg:block">
                        <div className="w-full h-full bg-cover bg-center rounded-xl" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAwLxdatiRsB6-siyFahAPScTW-lLOocsl4E_0ASa3LkQqOIIjJnyRVk6s_7u54-7fl9rLOqch6LgaTFCE_Na2AmYgQkENBYrFO6uUkN-u12jzQXgeLAbI5ErDNR4yOs21FPuHZh_vgKvt8jE8LYvBQC_888IudyLgjDwHw_sT28SotKioQoRE8E_ECaF2vC84BYYT39Cc8atVYFlIfA_X_ZRt_u3c3eY9Nl_XN06oiDH4n-dW9dk1D8Y3sS7Mg3pcoyl_Fmnquhwg")' }}></div>
                    </div>
                    <div className="absolute -right-24 bottom-10 w-48 h-48 opacity-40 -rotate-12 floating-burger hidden lg:block">
                        <div className="w-full h-full bg-cover bg-center rounded-xl" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBa7Aa0BQnPYFqBb4iTMauY1RdGczRg_ser05BABHlx1HzvZfEkE_cK2nZtphFugEh-6kM8iYRQQaDIlXsA_18X3rgUKhzg37Y2MojM3istVdsol97zg3dvxLvvOTu-8SvNptIPmLKQ_f6PslZ4XJ6H-DqypcV3R5Is9gT495gXhQLZdwOFY8fRWK4TRVCqLpHWIaxVjFYQl2g-XuexVJCuxIPngErlbUqKibEtQwq7aje-Dtib7HRjRliBFW8JbZ9c4XoGF36LWns")' }}></div>
                    </div>
                    <div className="text-center mb-12">
                        <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-4 inline-block">Edição Retrô 2024</span>
                        <h1 className="text-primary text-6xl md:text-8xl font-black leading-none bubbly-text mb-4 uppercase italic">
                            Rodízio de <br /> Hambúrguer
                        </h1>
                        <p className="text-[#181111] dark:text-white/80 text-lg md:text-xl font-medium max-w-2xl mx-auto">
                            A experiência definitiva all-you-can-eat com estética Pop Art. 
                            Traga sua galera e aproveite o desconto progressivo!
                        </p>
                    </div>
                    <div className="w-full max-w-2xl bg-white dark:bg-[#2d1818] rounded-[2rem] shadow-2xl p-8 md:p-12 border-4 border-primary/10 relative">
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary text-white px-8 py-2 rounded-full font-bold shadow-md whitespace-nowrap">
                            RESERVA DE MESA & INGRESSOS
                        </div>
                        <form className="space-y-6 mt-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-[#181111] dark:text-white text-sm font-bold uppercase tracking-wider ml-2 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary text-sm">person</span> Responsável
                                    </label>
                                    <input type="text" className="w-full rounded-full border-2 border-gray-100 dark:border-gray-700 bg-background-light dark:bg-background-dark p-4 focus:ring-primary focus:border-primary transition-all font-medium text-[#181111] dark:text-white" placeholder="Nome do titular" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-[#181111] dark:text-white text-sm font-bold uppercase tracking-wider ml-2 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary text-sm">call</span> WhatsApp
                                    </label>
                                    <input type="tel" className="w-full rounded-full border-2 border-gray-100 dark:border-gray-700 bg-background-light dark:bg-background-dark p-4 focus:ring-primary focus:border-primary transition-all font-medium text-[#181111] dark:text-white" placeholder="(00) 00000-0000" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-[#181111] dark:text-white text-sm font-bold uppercase tracking-wider ml-2 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary text-sm">groups</span> Grupo / Célula
                                    </label>
                                    <input type="text" className="w-full rounded-full border-2 border-gray-100 dark:border-gray-700 bg-background-light dark:bg-background-dark p-4 focus:ring-primary focus:border-primary transition-all font-medium text-[#181111] dark:text-white" placeholder="Nome da sua Célula" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-[#181111] dark:text-white text-sm font-bold uppercase tracking-wider ml-2 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary text-sm">event</span> Data
                                    </label>
                                    <select className="w-full rounded-full border-2 border-gray-100 dark:border-gray-700 bg-background-light dark:bg-background-dark p-4 focus:ring-primary focus:border-primary transition-all font-medium text-[#181111] dark:text-white appearance-none">
                                        <option>Sábado, 20 de Abril</option>
                                        <option>Sábado, 27 de Abril</option>
                                    </select>
                                </div>
                            </div>
                            <div className="bg-gray-50 dark:bg-background-dark/50 rounded-2xl p-6 flex flex-col items-center gap-4 border-2 border-dashed border-gray-200 dark:border-gray-700">
                                <div className="text-center">
                                    <p className="text-xs text-gray-400 font-bold uppercase tracking-tighter">Resumo do Pedido</p>
                                    <div className="flex items-center justify-center gap-2 text-primary">
                                        <span className="text-2xl font-black italic">
                                            <span>{qty}</span>x Ingressos = R$ <output>{qty * price}</output>,00
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row gap-4 items-stretch">
                                <div className="flex items-center bg-background-light dark:bg-background-dark rounded-full border-2 border-gray-100 dark:border-gray-700 p-2 min-w-[140px]">
                                    <button type="button" onClick={() => qty > 1 && setQty(qty - 1)} className="w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 text-primary hover:bg-primary hover:text-white transition-colors shadow-sm">
                                        <span className="material-symbols-outlined font-bold">remove</span>
                                    </button>
                                    <input type="number" readOnly className="w-full text-center bg-transparent border-none focus:ring-0 font-black text-xl text-[#181111] dark:text-white" value={qty} />
                                    <button type="button" onClick={() => qty < 20 && setQty(qty + 1)} className="w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 text-primary hover:bg-primary hover:text-white transition-colors shadow-sm">
                                        <span className="material-symbols-outlined font-bold">add</span>
                                    </button>
                                </div>
                                <button type="button" className="flex-1 bg-mustard hover:bg-[#ffcf30] text-[#181111] py-5 px-8 rounded-full text-lg md:text-xl font-black uppercase tracking-tight shadow-[0_8px_0_#d4ac1d] active:shadow-none active:translate-y-[4px] transition-all flex items-center justify-center gap-3">
                                    Garantir Nosso Lugar
                                    <span className="material-symbols-outlined font-black">arrow_forward</span>
                                </button>
                            </div>
                            <div className="text-center">
                                <span className="text-[10px] text-gray-400 font-bold uppercase flex items-center justify-center gap-1">
                                    <span className="material-symbols-outlined text-xs">info</span> 
                                    Máximo de 20 pessoas por reserva online
                                </span>
                            </div>
                        </form>
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