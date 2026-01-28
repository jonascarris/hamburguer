import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAU1qTBq-ERKXtQht0xBM0nP3S44vhxi2g",
    authDomain: "hamburguer-rede-laranja.firebaseapp.com",
    projectId: "hamburguer-rede-laranja",
    storageBucket: "hamburguer-rede-laranja.firebasestorage.app",
    messagingSenderId: "783571658204",
    appId: "1:783571658204:web:c3d0c264070dfdcc2d5b19"
};

// Inicializar Firebase apenas se ainda não foi inicializado
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

export { db, app };
