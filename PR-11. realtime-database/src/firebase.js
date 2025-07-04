// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxo2RCcHXRZVsG1_VOcmXAZaSjNDkeZ68",
  authDomain: "realtime-firebase-eb3b9.firebaseapp.com",
  databaseURL: "https://realtime-firebase-eb3b9-default-rtdb.firebaseio.com",
  projectId: "realtime-firebase-eb3b9",
  storageBucket: "realtime-firebase-eb3b9.firebasestorage.app",
  messagingSenderId: "845334134610",
  appId: "1:845334134610:web:3c254e8a8d9462f69d848b",
  measurementId: "G-YDDCTT8VM8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);