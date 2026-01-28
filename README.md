# Sistema de Inscrição - Rodízio de Hambúrguer
## Rede Laranja

Sistema simplificado para gerenciar inscrições e pagamentos do evento.

## 🚀 Funcionalidades

- ✅ Formulário de inscrição simplificado
- 💳 Pagamento via Mercado Pago (R$ 30,00)
- 🔒 Área administrativa com autenticação
- 📊 Dashboard com lista de inscritos e resumo financeiro
- 🔔 Webhook para confirmação automática de pagamentos

## 📋 Campos do Formulário

- Nome Completo
- Data de Nascimento
- WhatsApp
- Faz parte de célula? (Sim/Não)
- Nome da Célula (se aplicável)

## 🛠️ Tecnologias

- **Frontend**: React + TypeScript + Tailwind CSS
- **Backend**: Node.js + Express
- **Database**: Firebase Firestore
- **Pagamento**: Mercado Pago API

## ⚙️ Configuração

1. **Instalar dependências**:
```bash
npm install
```

2. **Configurar Firebase**:
   - Crie um projeto no [Firebase Console](https://console.firebase.google.com/)
   - Copie as credenciais do Firebase
   - Renomeie `.env.example` para `.env.local`
   - Preencha as variáveis do Firebase

3. **Credenciais Mercado Pago** (já configuradas):
   - Access Token: `APP_USR-8109231522244005-052614-8787b612fa04e743e0dda33b1099b7fc-10939427`
   - Public Key: `APP_USR-0a44bde2-c137-42de-b3d6-c3d1156f8205`

## 🚀 Executar o Sistema

**Um único comando inicia frontend e backend**:
```bash
npm run dev:all
```

Acesse: `http://localhost:5173`

## 🔐 Acesso Administrativo

- **Email**: jonascarris@gmail.com
- **Senha**: abcd,1234

## 📁 Estrutura

```
hamburguer/
├── src/
│   └── components/
│       ├── SimpleRegistration.tsx  # Formulário de inscrição
│       └── SimpleAdmin.tsx         # Painel administrativo
├── server/
│   ├── config/
│   │   ├── mercadopago.js         # Config Mercado Pago
│   │   └── firebase.js            # Config Firebase
│   ├── controllers/
│   │   └── simpleController.js    # Lógica de negócio
│   └── index.js                   # Servidor Express
└── SimpleApp.tsx                  # App principal
```

## 🔄 Fluxo de Pagamento

1. Usuário preenche o formulário
2. Sistema cria registro no Firebase (status: pending)
3. Redireciona para Mercado Pago
4. Usuário realiza o pagamento
5. Webhook recebe confirmação
6. Sistema atualiza status para "approved"
7. Aparece no dashboard administrativo

## 📝 Notas

- Os erros de `@tailwind` no CSS são normais (são diretivas do Tailwind)
- O sistema usa proxy do Vite para comunicação frontend-backend
- Certifique-se de configurar o Firebase antes de usar em produção
