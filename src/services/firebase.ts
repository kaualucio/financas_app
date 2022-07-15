
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, query, limit, orderBy, onSnapshot } from "firebase/firestore";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBqgYnyn4MQYYzcdyKO6OCTvI3ynu2C6dU",
  authDomain: "app-financas-5555b.firebaseapp.com",
  projectId: "app-financas-5555b",
  storageBucket: "app-financas-5555b.appspot.com",
  messagingSenderId: "873928487544",
  appId: "1:873928487544:web:c3185d4538e27516c1b38d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth();

export { app, db, collection, addDoc, getDocs, query, orderBy, limit, onSnapshot, GoogleAuthProvider, auth, signInWithPopup }