import { initializeApp } from 'firebase/app';
import {
    getFirestore,
    collection,
    getDocs,
} from 'firebase/firestore'

const  firebaseConfig = {
    apiKey: "AIzaSyBa-ith4CzHcFqiFHJxKiHo5RVVlv7hwVM",
    authDomain: "dbmicro-84106.firebaseapp.com",
    databaseURL: "https://dbmicro-84106-default-rtdb.firebaseio.com",
    projectId: "dbmicro-84106",
    storageBucket: "dbmicro-84106.appspot.com",
    messagingSenderId: "774473211335",
    appId: "1:774473211335:web:b5c4d485307e3e2bbf0de2"
};

initializeApp(firebaseConfig)

const db= getFirestore()

const colRef = collection(db, "data")

getDocs(colRef)
    .then((snapshot) => {
        console.log(snapshot.docs)
    })

