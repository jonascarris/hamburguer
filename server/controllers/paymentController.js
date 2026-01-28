import { Preference, Payment } from 'mercadopago';
import client from '../config/mercadopago.js';

export const createPreference = async (req, res) => {
    try {
        const { attendees, coupon } = req.body;

        // Better Approach:
        // Input: { attendees: [...], couponCode: string }
        const PRICE_PER_PERSON = 30.00;
        const quantity = attendees.length;
        let discount = 0; // Logic to calculate discount based on coupon

        // Example discount logic
        if (req.body.discountValue) {
            discount = req.body.discountValue;
        }

        const preference = new Preference(client);

        const body = {
            items: [
                {
                    id: 'rodizio-hamburguer',
                    title: 'Rodízio de Hambúrguer - Rede Laranja',
                    quantity: quantity,
                    unit_price: PRICE_PER_PERSON,
                    currency_id: 'BRL',
                    description: `Inscrição para ${attendees.map(a => a.name).join(', ')}`
                }
            ],
            payer: {
                email: 'jonascarris+mp@gmail.com'
            },
            back_urls: {
                success: 'http://localhost:5173/confirmation?status=success',
                failure: 'http://localhost:5173/checkout?status=failure',
                pending: 'http://localhost:5173/checkout?status=pending'
            },
            auto_return: 'approved',
            notification_url: 'https://seusite.com/api/webhook'
        };

        if (discount > 0) {
            const total = (quantity * PRICE_PER_PERSON) - discount;
            // Adjust unit price to reflect total with discount
            body.items[0].unit_price = Number((total / quantity).toFixed(2));
        }

        const result = await preference.create({ body });

        res.json({ id: result.id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar preferência de pagamento' });
    }
};

export const receiveWebhook = async (req, res) => {
    const payment = new Payment(client);
    const { action, data } = req.body; // Webhook payload structure varies, checking documentation standard

    try {
        if (action === 'payment.created' || action === 'payment.updated') {
            if (data && data.id) {
                const paymentData = await payment.get({ id: data.id });
                console.log('Payment Status:', paymentData.status);

                // TODO: Update Firebase here
                // if (paymentData.status === 'approved') { updateFirestore(...) }
            }
        }
        res.sendStatus(200);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}
