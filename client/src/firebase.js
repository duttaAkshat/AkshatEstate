import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-app-4d9cc.firebaseapp.com",
  projectId: "real-estate-app-4d9cc",
  storageBucket: "real-estate-app-4d9cc.appspot.com",
  messagingSenderId: "241926033147",
  appId: "1:241926033147:web:a2dee9b8242ffcad936a5e",
  measurementId: "G-D70LKSH060",
};

const app = initializeApp(firebaseConfig);

export default app;
