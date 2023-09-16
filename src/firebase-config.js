// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// require('dotenv').config();
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLB5uGh2I8HyUOA23ml3v90AokWEw3yro",
  authDomain: "image-gallery-f119c.firebaseapp.com",
  projectId: "image-gallery-f119c",
  storageBucket: "image-gallery-f119c.appspot.com",
  messagingSenderId: "776512365229",
  appId: "776512365229web:5f5ffecfdfa69462c29c24",
  measurementId: "G-0MG4EPV9DM",
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export default app;