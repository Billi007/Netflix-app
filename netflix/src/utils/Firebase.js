// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTAl8Q2GNz01Egep0IfBqeANjyiinHZgE",
  authDomain: "netflix-app-d14d1.firebaseapp.com",
  projectId: "netflix-app-d14d1",
  storageBucket: "netflix-app-d14d1.firebasestorage.app",
  messagingSenderId: "902646681097",
  appId: "1:902646681097:web:a31ec843f25e49fc8472d8",
  measurementId: "G-BNFD06CQCH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();