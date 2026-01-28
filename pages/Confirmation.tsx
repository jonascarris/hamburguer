import React from 'react';

export const Confirmation: React.FC = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display min-h-screen pop-art-bg flex flex-col">
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-primary/10 bg-white/80 backdrop-blur-md px-10 py-3 sticky top-0 z-50">
                <div className="flex items-center gap-4 text-primary">
                    <div className="size-8">
                        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z" fill="currentColor" />
                        </svg>
                    </div>
                    <h2 className="text-[#181111] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">Retro Burger</h2>
                </div>
                <div className="flex flex-1 justify-end gap-8">
                    <div className="flex items-center gap-9">
                        <a href="#" className="text-[#181111] dark:text-white text-sm font-medium leading-normal hover:text-primary transition-colors">Início</a>
                        <a href="#" className="text-[#181111] dark:text-white text-sm font-medium leading-normal hover:text-primary transition-colors">Cardápio</a>
                        <a href="#" className="text-[#181111] dark:text-white text-sm font-medium leading-normal hover:text-primary transition-colors">Localização</a>
                    </div>
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:scale-105 transition-transform">
                        <span className="truncate">Meu Perfil</span>
                    </button>
                </div>
            </header>
            <main className="flex flex-1 flex-col items-center justify-center py-12 px-4 relative overflow-hidden">
                <div className="absolute top-20 left-10 opacity-20 rotate-12 hidden lg:block">
                    <div className="w-24 h-24 bg-accent-yellow rounded-xl border-4 border-black flex items-center justify-center">
                        <span className="material-symbols-outlined text-5xl text-black">lunch_dining</span>
                    </div>
                </div>
                <div className="absolute bottom-20 right-10 opacity-20 -rotate-12 hidden lg:block">
                    <div className="w-32 h-32 bg-primary rounded-xl border-4 border-black flex items-center justify-center">
                        <span className="material-symbols-outlined text-6xl text-white">fastfood</span>
                    </div>
                </div>
                <div className="text-center mb-8 max-w-[800px] z-10">
                    <h1 className="text-primary font-retro text-2xl md:text-4xl tracking-tighter mb-4 uppercase drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                        Presença Confirmada!
                    </h1>
                    <p className="text-[#181111] dark:text-white/80 text-lg font-semibold bg-accent-yellow px-4 py-1 inline-block transform -rotate-1">
                        Prepare o apetite! Seu lugar no Rodízio está garantido.
                    </p>
                </div>
                <div className="w-full max-w-[900px] bg-white rounded-2xl shadow-[10px_10px_0px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col md:flex-row border-2 border-black/5 z-10">
                    <div className="md:w-1/3 bg-primary p-8 flex flex-col items-center justify-center text-white relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '15px 15px' }}></div>
                        <div className="relative z-10 flex flex-col items-center">
                            <div className="bg-white p-4 rounded-xl mb-4 shadow-xl">
                                <div className="size-32 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC33KXg3InMF-8gaNhyC3jCVh0JLIzt74TvAzP6mw-HcENaKY9qrcSgGmElmy0sLkXFpnNIv-8e1BYe9vJ-VVvyIy392VgexuqiJoxbMVzEsewcUkvg2T4Oyo-N9B9XSNdtQaJqbTWAX6ZhQM0nnftOu6kK47PEayruXahKqhnDSAHU09FQpnXDnw77isrGR0QRBt0Ktm3r192Lku_Vk6tRugsOxQGmEDk_7hHV-7KbzDJqJ9ObjrlFVFHx7bkHdOyiGsHfM2xSNtI")' }}></div>
                            </div>
                            <p className="font-retro text-[10px] tracking-widest uppercase">ID: RB-2023-X99</p>
                            <div className="mt-8 border-2 border-dashed border-white/50 p-4 text-center">
                                <p className="font-bold text-xl">PAGAMENTO INTEGRAL</p>
                                <p className="text-xs opacity-80 uppercase tracking-tighter">Rodízio All-You-Can-Eat</p>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-2/3 p-8 flex flex-col justify-between bg-white relative">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h3 className="text-black font-retro text-xs mb-2">ENTRADA ÚNICA - CONVIDADO</h3>
                                <p className="text-3xl font-extrabold text-[#181111] uppercase">Alex Johnson</p>
                            </div>
                            <div className="bg-black text-white px-3 py-1 font-retro text-[10px] transform rotate-3">
                                #7890
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-2 rounded-lg">
                                    <span className="material-symbols-outlined text-primary">calendar_month</span>
                                </div>
                                <div>
                                    <p className="text-xs uppercase font-bold text-gray-500">Data e Horário</p>
                                    <p className="text-[#181111] font-semibold">Sexta-feira, 20 de Outubro | 19:00 - 23:00</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-2 rounded-lg">
                                    <span className="material-symbols-outlined text-primary">location_on</span>
                                </div>
                                <div>
                                    <p className="text-xs uppercase font-bold text-gray-500">Localização</p>
                                    <p className="text-[#181111] font-semibold">Retro Burger Diner - Av. Paulista, 123</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 pt-6 border-t border-dashed border-gray-300">
                            <p className="text-[10px] text-gray-400 leading-tight">
                                * Válido apenas para a data selecionada. Apresente este ticket na entrada (celular ou impresso). Bebidas não inclusas a menos que especificado no pacote. O não comparecimento não dá direito a reembolso.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full max-w-[600px] justify-center z-10 px-4">
                    <button className="flex flex-1 min-w-[200px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full h-14 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] shadow-[0_4px_0_rgb(180,10,10)] active:translate-y-1 active:shadow-none transition-all">
                        <span className="material-symbols-outlined">download</span>
                        <span className="truncate uppercase">Baixar Ticket</span>
                    </button>
                    <button className="flex flex-1 min-w-[200px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full h-14 px-6 bg-white border-2 border-black text-[#181111] text-base font-bold leading-normal tracking-[0.015em] shadow-[0_4px_0_rgba(0,0,0,0.1)] active:translate-y-1 active:shadow-none transition-all">
                        <span className="material-symbols-outlined">calendar_add_on</span>
                        <span className="truncate uppercase">Adicionar ao Calendário</span>
                    </button>
                </div>
                <div className="mt-8 flex items-center gap-4 z-10">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Compartilhe sua vaga:</span>
                    <div className="flex gap-2">
                        <button className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center bg-[#1877F2] text-white hover:scale-110 transition-transform">
                            <svg className="size-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>
                        </button>
                        <button className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center bg-[#E1306C] text-white hover:scale-110 transition-transform">
                            <svg className="size-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.248 2.242 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.248-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.248-2.242-1.31-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.31-3.608.975-.975 2.242-1.248 3.608-1.31 1.266-.058 1.646-.07 4.85-.07M12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path></svg>
                        </button>
                        <button className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center bg-[#25D366] text-white hover:scale-110 transition-transform">
                            <svg className="size-5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.938 3.659 1.432 5.631 1.432h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path></svg>
                        </button>
                    </div>
                </div>
            </main>
            <footer className="mt-auto py-8 bg-white/50 border-t border-black/5 text-center">
                <p className="text-sm font-medium text-gray-600">Retro Burger Diner © 2023. Todos os direitos reservados.</p>
                <div className="mt-2 flex justify-center gap-6">
                    <a href="#" className="text-xs text-gray-400 hover:text-primary underline">Política de Cancelamento</a>
                    <a href="#" className="text-xs text-gray-400 hover:text-primary underline">Termos e Condições</a>
                </div>
            </footer>
        </div>
    );
};