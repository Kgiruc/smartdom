import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const FIREBASE_CONFIG = {
    apiKey: "AIzaSyBa-ith4CzHcFqiFHJxKiHo5RVVlv7hwVM",
    authDomain: "dbmicro-84106.firebaseapp.com",
    databaseURL: "https://dbmicro-84106-default-rtdb.firebaseio.com",
    projectId: "dbmicro-84106",
    storageBucket: "dbmicro-84106.appspot.com",
    messagingSenderId: "774473211335",
    appId: "1:774473211335:web:b5c4d485307e3e2bbf0de2"
};

const app = initializeApp(FIREBASE_CONFIG);
export const db = getFirestore(app)
