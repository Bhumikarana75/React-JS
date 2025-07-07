import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZOO8bPafZhc32LoLPht2IOKy08hJCLvo",
  authDomain: "fir-storage-a6c66.firebaseapp.com",
  projectId: "fir-storage-a6c66",
  storageBucket: "fir-storage-a6c66.firebasestorage.app",
  messagingSenderId: "99346090249",
  appId: "1:99346090249:web:7d9505f1adf57b2df42bd8",
  measurementId: "G-FXPBKTGSX5"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);