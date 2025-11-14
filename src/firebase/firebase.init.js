// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey, 
  authDomain: import.meta.env.VITE_authDomain, 
  projectId: import.meta.env.VITE_projectId, 
  storageBucket: import.meta.env.VITE_storageBucket, 
  messagingSenderId: import.meta.env.VITE_messagingSenderId, 
  appId: import.meta.env.VITE_appId, 
};
// const firebaseConfig = {
//   apiKey: "AIzaSyCmGDs5obNzs2rRGfTll9bwZmAG4O8USSQ",
//   authDomain: "fineease-fe3d1.firebaseapp.com",
//   projectId: "fineease-fe3d1",
//   storageBucket: "fineease-fe3d1.firebasestorage.app",
//   messagingSenderId: "299611020521",
//   appId: "1:299611020521:web:e0e41f7b5f2bcf139c2478"
// };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);