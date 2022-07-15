
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, query, limit, orderBy, onSnapshot } from "firebase/firestore";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth();

export { app, db, collection, addDoc, getDocs, query, orderBy, limit, onSnapshot, GoogleAuthProvider, auth, signInWithPopup }