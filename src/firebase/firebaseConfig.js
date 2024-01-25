import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "todofirebase-df58c.firebaseapp.com",
  projectId: "todofirebase-df58c",
  storageBucket: "todofirebase-df58c.appspot.com",
  messagingSenderId: "943745476939",
  appId: "1:943745476939:web:6741cce2549e41039aa0ce"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);