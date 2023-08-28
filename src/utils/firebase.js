// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANZJov3NcMhkYQhuHtoW6ISiRK6ecTkN8",
  authDomain: "netfilxgpt.firebaseapp.com",
  projectId: "netfilxgpt",
  storageBucket: "netfilxgpt.appspot.com",
  messagingSenderId: "300868034143",
  appId: "1:300868034143:web:b7b0abfbaaba69f869c5ea",
  measurementId: "G-GQLE848MLX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Authentication
export const auth = getAuth();
