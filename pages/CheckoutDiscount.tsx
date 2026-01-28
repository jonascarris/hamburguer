import React from 'react';

export const CheckoutDiscount: React.FC = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display min-h-screen flex flex-col">
            <header className="bg-white dark:bg-background-dark border-b border-solid border-gray-100 dark:border-gray-800 px-4 md:px-20 py-4 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="size-10 bg-primary text-white flex items-center justify-center rounded-xl rotate-3">
                            <span className="material-symbols-outlined">lunch_dining</span>
                        </div>
                        <h2 className="text-[#181111] dark:text-white text-xl font-extrabold leading-tight tracking-tight uppercase">Burger <span className="text-primary">Rodízio</span></h2>
                    </div>
                    <div className="hidden md:flex items-center gap-8">
                        <nav className="flex items-center gap-6">
                            <a href="#" className="text-[#181111] dark:text-gray-300 text-sm font-bold uppercase hover:text-primary transition-colors">Menu</a>
                            <a href="#" className="text-[#181111] dark:text-gray-300 text-sm font-bold uppercase hover:text-primary transition-colors">Eventos</a>
                            <a href="#" className="text-[#181111] dark:text-gray-300 text-sm font-bold uppercase hover:text-primary transition-colors">Minha Conta</a>
                        </nav>
                        <button className="bg-primary text-white text-sm font-extrabold uppercase px-6 py-2 rounded-full pop-art-shadow hover:translate-y-0.5 transition-transform active:shadow-none">
                            Sair
                        </button>
                    </div>
                </div>
            </header>
            <main className="flex-1 max-w-7xl mx-auto w-full px-4 md:px-20 py-8">
                <div className="mb-8">
                    <div className="flex flex-wrap gap-2 py-2">
                        <a href="#" className="text-[#8a6060] dark:text-gray-400 text-sm font-medium hover:text-primary">Home</a>
                        <span className="text-[#8a6060] dark:text-gray-400 text-sm">/</span>
                        <span className="text-[#181111] dark:text-white text-sm font-bold">Finalizar Pedido</span>
                    </div>
                    <div className="flex flex-wrap justify-between gap-3 pt-4">
                        <div className="flex flex-col gap-1">
                            <h1 className="text-[#181111] dark:text-white text-4xl font-black leading-tight tracking-tighter uppercase italic">O Seu Banquete está pronto!</h1>
                            <p className="text-[#8a6060] dark:text-gray-400 text-lg font-medium">Complete o pagamento para garantir seu lugar no diner.</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-5 space-y-6">
                        <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 relative overflow-visible">
                            <div className="absolute -top-4 -right-2 z-10 bg-mustard text-black px-4 py-2 border-2 border-black font-black text-sm uppercase italic rotate-6 sticker-shadow">
                                -10% OFF GRUPO
                            </div>
                            <h2 className="text-[#181111] dark:text-white text-xl font-bold mb-4 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">receipt_long</span>
                                Resumo do Pedido
                            </h2>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 p-4 rounded-xl bg-background-light dark:bg-gray-800 border border-dashed border-gray-300 dark:border-gray-700">
                                    <div className="w-16 h-16 rounded-lg bg-center bg-cover border-2 border-primary" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA4qFAWUWlJJCF8Q74FBm602n-xynHv9upZgWvHDXIX5nWA7DFirOy1TNZK5T5KaFMdQEcIjvftzuvdoA9tIyLOMOqLjcitGf4QliIZfjkH3c_ydQc9mE56TR5bP7iX4z_5dFzqmPIgnaKMqVK0B3gkkxRNQxTCBmOND5Hx9F2U1wtlDcjucMgt05SPUpt6SIbCjsCSmp5d33CrnusJQUrJTAxNQtHVcHN9hCqNRsFGrP43LmqFRBtcNI8cT__PXz0kXswIdQOr1HQ")' }}>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-[#181111] dark:text-white font-bold leading-tight uppercase italic">4x Ingressos Rodízio</p>
                                        <p className="text-[#8a6060] dark:text-gray-400 text-xs font-medium">Sábado, 20:00h • Golden Diner</p>
                                        <div className="flex items-center gap-2 mt-1">
                                            <span className="text-gray-400 text-xs line-through font-bold">R$ 120,00</span>
                                            <span className="text-primary text-sm font-extrabold">R$ 108,00</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-4 border-t border-gray-100 dark:border-gray-800 space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-500 dark:text-gray-400">Subtotal</span>
                                        <span className="font-bold text-[#181111] dark:text-white italic line-through opacity-50">R$ 120,00</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-500 dark:text-gray-400">Combo Desconto (Grupo)</span>
                                        <span className="font-bold text-green-600 italic">- R$ 12,00</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-500 dark:text-gray-400">Taxas</span>
                                        <span className="font-bold text-[#181111] dark:text-white italic">R$ 0,00</span>
                                    </div>
                                    <div className="flex justify-between items-center pt-4 border-t border-primary/20">
                                        <div className="flex flex-col">
                                            <span className="text-xl font-black uppercase text-[#181111] dark:text-white italic">Total</span>
                                            <div className="bg-mustard text-black text-[10px] font-black px-2 py-0.5 border border-black uppercase -rotate-2 w-fit">COMBO DESCONTO!</div>
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <span className="text-xs text-gray-400 line-through font-bold">R$ 120,00</span>
                                            <span className="text-3xl font-black text-primary italic">R$ 108,00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
                            <label className="text-[#181111] dark:text-white text-sm font-bold uppercase mb-3 block">Cupom de Desconto?</label>
                            <div className="flex gap-2">
                                <input type="text" className="flex-1 bg-background-light dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-full px-4 py-2 text-sm focus:border-primary focus:ring-0 uppercase font-bold outline-none" placeholder="INSIRA O CÓDIGO" />
                                <button className="bg-gray-900 dark:bg-primary text-white px-6 py-2 rounded-full text-xs font-black uppercase hover:bg-black transition-colors">
                                    Aplicar
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-7 space-y-6">
                        <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-sm border border-gray-100 dark:border-gray-800">
                            <h2 className="text-[#181111] dark:text-white text-xl font-bold mb-6 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">payments</span>
                                Como prefere pagar?
                            </h2>
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <button className="flex flex-col items-center gap-2 p-6 rounded-2xl border-2 border-primary bg-primary/5 text-primary">
                                    <span className="material-symbols-outlined text-3xl font-bold">qr_code_2</span>
                                    <span className="font-black uppercase italic">PIX</span>
                                </button>
                                <button className="flex flex-col items-center gap-2 p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-800 hover:border-primary/50 transition-colors text-gray-400 dark:text-gray-500">
                                    <span className="material-symbols-outlined text-3xl">credit_card</span>
                                    <span className="font-black uppercase italic">Cartão</span>
                                </button>
                            </div>
                            <div className="bg-background-light dark:bg-gray-800/50 rounded-2xl p-8 border border-dashed border-gray-300 dark:border-gray-700">
                                <div className="flex flex-col items-center text-center">
                                    <div className="bg-white p-4 rounded-xl shadow-md mb-6 relative">
                                        <div className="w-48 h-48 bg-center bg-contain" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBdSifnZl9k_S27ai0H77sjiboiXKOvj3QU32ymheYQr43ExSBZR9Eu6C1TLrmZTHyLSGFVievvgDqTYnRNGZ7X_JcA9OWQ7NzPLTMheVEaMcYr-GagIMXdg3XQoXgw3cuy6FOnl6imPzL_iT1tLv-g_S8dCe4oL8vhp_T9u2gmU0tfPg2QUSU_dw55oI4cHMSS4kn6HRJjiBMkMC0uCCIkyBuuQcOdUsQMudZV0VGcCgiT6WGpd7PXEsOrZXQVdXz-fJmnv9e8ywc")' }}></div>
                                        <div className="absolute -top-3 -right-3 bg-primary text-white px-3 py-1 rounded-full text-[10px] font-black uppercase">Expira em 10:00</div>
                                    </div>
                                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 max-w-sm">
                                        Escaneie o código acima com o app do seu banco. O pagamento via <strong>PIX</strong> é instantâneo e seguro.
                                    </p>
                                    <button className="flex items-center gap-2 text-primary font-bold hover:underline mb-2">
                                        <span className="material-symbols-outlined text-sm">content_copy</span>
                                        Copiar código PIX
                                    </button>
                                </div>
                            </div>
                            <div className="mt-8 space-y-4">
                                <button className="w-full bg-primary text-white py-4 rounded-full text-lg font-black uppercase italic pop-art-shadow flex items-center justify-center gap-3 hover:translate-y-1 hover:shadow-none transition-all">
                                    Finalizar Pedido Agora
                                    <span className="material-symbols-outlined">rocket_launch</span>
                                </button>
                                <div className="flex items-center justify-center gap-6 pt-4 border-t border-gray-100 dark:border-gray-800">
                                    <div className="flex items-center gap-1 text-[10px] text-gray-400 font-bold uppercase">
                                        <span className="material-symbols-outlined text-sm">shield</span>
                                        Ambiente Seguro
                                    </div>
                                    <div className="flex items-center gap-1 text-[10px] text-gray-400 font-bold uppercase">
                                        <span className="material-symbols-outlined text-sm">verified_user</span>
                                        Certificado SSL
                                    </div>
                                    <div className="flex items-center gap-1 text-[10px] text-gray-400 font-bold uppercase hover:text-primary cursor-help">
                                        <span className="material-symbols-outlined text-sm">support_agent</span>
                                        Ajuda
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="mt-auto relative py-12 border-t border-gray-200 dark:border-gray-800">
                <div className="absolute inset-0 checkered-footer pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 md:px-20 relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">restaurant</span>
                        <span className="text-sm font-bold text-gray-600 dark:text-gray-400">© 2024 BURGER RODÍZIO - O MELHOR DO POP ART DINER</span>
                    </div>
                    <div className="flex gap-4">
                        <div className="size-8 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
                            <span className="material-symbols-outlined text-sm">share</span>
                        </div>
                        <div className="size-8 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
                            <span className="material-symbols-outlined text-sm">thumb_up</span>
                        </div>
                        <div className="size-8 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
                            <span className="material-symbols-outlined text-sm">photo_camera</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};