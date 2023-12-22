// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXLIDq9GCpA1pyKcfJiTBQiPUWD2urQ10",
  authDomain: "portfolio-93fd0.firebaseapp.com",
  projectId: "portfolio-93fd0",
  storageBucket: "portfolio-93fd0.appspot.com",
  messagingSenderId: "234585166670",
  appId: "1:234585166670:web:a30f7caab23e5ff4a1c41f",
  measurementId: "G-SVZD5Y198L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);