import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { createPayment, receiveWebhook, getRegistrations, deleteRegistration } from './controllers/simpleController.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

// Rotas da API
app.post('/api/create-payment', createPayment);
app.post('/api/webhook', receiveWebhook);
app.get('/api/registrations', getRegistrations);
app.delete('/api/registrations/:id', deleteRegistration);

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
