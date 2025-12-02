// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_mwEHxqUC9hY_eC-MZ7Uml_1jt1WWuGk",
  authDomain: "public-portfolio-d8fb6.firebaseapp.com",
  projectId: "public-portfolio-d8fb6",
  storageBucket: "public-portfolio-d8fb6.firebasestorage.app",
  messagingSenderId: "443042633578",
  appId: "1:443042633578:web:533059cee0100137c5f713",
  measurementId: "G-3Q9GBRNMEX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);