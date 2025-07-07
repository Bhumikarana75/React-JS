// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZOO8bPafZhc32LoLPht2IOKy08hJCLvo",
  authDomain: "fir-storage-a6c66.firebaseapp.com",
  databaseURL: "https://fir-storage-a6c66-default-rtdb.firebaseio.com",
  projectId: "fir-storage-a6c66",
  storageBucket: "fir-storage-a6c66.firebasestorage.app",
  messagingSenderId: "99346090249",
  appId: "1:99346090249:web:7d9505f1adf57b2df42bd8",
  measurementId: "G-FXPBKTGSX5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider
const analytics = getAnalytics(app);