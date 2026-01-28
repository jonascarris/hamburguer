import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createPayment, receiveWebhook, getRegistrations, deleteRegistration } from './controllers/simpleController.js';

// Carregar variáveis de ambiente
dotenv.config({ path: '../.env.local' });

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

// Rotas da API (o prefixo /api já é tratado pelo Vercel Rewrites)
app.post('/create-payment', createPayment);
app.post('/webhook', receiveWebhook);
app.get('/registrations', getRegistrations);
app.delete('/registrations/:id', deleteRegistration);

if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

export default app;
