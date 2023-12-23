// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-app-4d9cc.firebaseapp.com",
  projectId: "real-estate-app-4d9cc",
  storageBucket: "real-estate-app-4d9cc.appspot.com",
  messagingSenderId: "241926033147",
  appId: "1:241926033147:web:a2dee9b8242ffcad936a5e",
  measurementId: "G-D70LKSH060",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
