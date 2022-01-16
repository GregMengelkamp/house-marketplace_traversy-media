// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBELCbWms5NBmPfBBJejXyf699qi5EHd8U",
  authDomain: "house-marketplace-app-d2d86.firebaseapp.com",
  projectId: "house-marketplace-app-d2d86",
  storageBucket: "house-marketplace-app-d2d86.appspot.com",
  messagingSenderId: "40986081272",
  appId: "1:40986081272:web:42b05714af6c974cf7480d"
};

// Initialize Firebase
// eslint-disable-next-line
const app = initializeApp(firebaseConfig);
export const db = getFirestore()