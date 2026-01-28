import { MercadoPagoConfig } from 'mercadopago';

// Configuração do Mercado Pago com as credenciais fornecidas
const client = new MercadoPagoConfig({
    accessToken: 'APP_USR-8109231522244005-052614-8787b612fa04e743e0dda33b1099b7fc-10939427',
    options: { timeout: 5000 }
});

export default client;
