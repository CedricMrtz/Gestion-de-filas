// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

getAuth
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkPERy9NQY1cJQw9nQf3ZG41-ROEF7xEs",
  authDomain: "proyecto-icc-2025.firebaseapp.com",
  projectId: "proyecto-icc-2025",
  storageBucket: "proyecto-icc-2025.firebasestorage.app",
  messagingSenderId: "489637275595",
  appId: "1:489637275595:web:97712c33a8a403ee02384e"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)
export const FIREBASE_DB = getFirestore(FIREBASE_APP)