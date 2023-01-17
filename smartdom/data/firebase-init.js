import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const FIREBASE_CONFIG = {
    apiKey: import.meta.env.VITE_API,
    authDomain: import.meta.env.VITE_DOMAIN,
    databaseURL: import.meta.env.VITE_URL,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId
};

const app = initializeApp(FIREBASE_CONFIG);
export const db = getFirestore(app)
