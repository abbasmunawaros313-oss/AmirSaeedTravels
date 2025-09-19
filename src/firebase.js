// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCM2hsrkRgfbIJ_Dri_c9q7iatPGiRhZC0",
  authDomain: "amirsaeedtravels.firebaseapp.com",
  projectId: "amirsaeedtravels",
  storageBucket: "amirsaeedtravels.firebasestorage.app",
  messagingSenderId: "890260251747",
  appId: "1:890260251747:web:b4873b56fe6b9666a58456",
  measurementId: "G-9SB5NLC3GT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
