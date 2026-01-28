import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { createPayment, receiveWebhook, getRegistrations, deleteRegistration } from './controllers/simpleController.js';

// Carregar variáveis de ambiente
dotenv.config({ path: '../.env.local' });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

// Rotas da API (o prefixo /api já é tratado pelo Vercel Rewrites)
app.post('/create-payment', createPayment);
app.post('/webhook', receiveWebhook);
app.get('/registrations', getRegistrations);
app.delete('/registrations/:id', deleteRegistration);

// Servir arquivos estáticos do Frontend (após o build)
app.use(express.static(path.join(__dirname, '../dist')));

// Fallback para SPA (qualquer rota que não seja API volta para o index.html)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

export default app;
