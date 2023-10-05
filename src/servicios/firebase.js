// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0X9blzJBWo6Yjrtw1anetxcnl576fCQc",
  authDomain: "hc-bebidas-store.firebaseapp.com",
  projectId: "hc-bebidas-store",
  storageBucket: "hc-bebidas-store.appspot.com",
  messagingSenderId: "363281855177",
  appId: "1:363281855177:web:5add7eabccef61bfb8d318",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
