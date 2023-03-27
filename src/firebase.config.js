// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA4nRgJ_msW-rMc7xbvu4C40gaXYPHdA8g",
    authDomain: "house-marketplace-app-cfb46.firebaseapp.com",
    projectId: "house-marketplace-app-cfb46",
    storageBucket: "house-marketplace-app-cfb46.appspot.com",
    messagingSenderId: "565160573657",
    appId: "1:565160573657:web:49537c6490863356885cc8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()