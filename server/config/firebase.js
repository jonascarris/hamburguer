import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY || "AIzaSyDemoKey",
    authDomain: process.env.FIREBASE_AUTH_DOMAIN || "hamburguer-rede-laranja.firebaseapp.com",
    projectId: process.env.FIREBASE_PROJECT_ID || "hamburguer-rede-laranja",
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET || "hamburguer-rede-laranja.appspot.com",
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || "123456789",
    appId: process.env.FIREBASE_APP_ID || "1:123456789:web:abcdef"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
