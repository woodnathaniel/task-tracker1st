import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGOFI8g7bDjoAFV-Xhic1Mdfeelcu57eQ",
  authDomain: "todoappreact-9a32c.firebaseapp.com",
  projectId: "todoappreact-9a32c",
  storageBucket: "todoappreact-9a32c.appspot.com",
  messagingSenderId: "409570196634",
  appId: "1:409570196634:web:4dad0f7f6db53a193d3323"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);