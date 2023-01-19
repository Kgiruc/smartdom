import {collection} from "firebase/firestore";
import {db} from "./firebase-init.js";

export const roomCollectionRef = collection(db, 'dane')