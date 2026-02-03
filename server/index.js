import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createPayment, receiveWebhook, getRegistrations, deleteRegistration, refundPayment, syncRegistrationStatus } from './controllers/simpleController.js';

// Carregar variáveis de ambiente
dotenv.config({ path: '../.env.local' });

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

// Rotas da API
app.post('/api/create-payment', createPayment);
app.post('/api/webhook', receiveWebhook);
app.get('/api/registrations', getRegistrations);
app.delete('/api/registrations/:id', deleteRegistration);
app.post('/api/refund/:id', refundPayment);
app.post('/api/sync/:id', syncRegistrationStatus);

if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

export default app;
