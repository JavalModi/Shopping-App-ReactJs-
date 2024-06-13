// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTIkyd71EjC-hEa5zypKbnd-H-0_wH5tY",
  authDomain: "ekart-a7534.firebaseapp.com",
  projectId: "ekart-a7534",
  storageBucket: "ekart-a7534.appspot.com",
  messagingSenderId: "1052378016793",
  appId: "1:1052378016793:web:6dbd52f2f1f6475f924e88",
  measurementId: "G-KK0L32201D"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
const analytics = getAnalytics(app);
export const db = getFirestore();