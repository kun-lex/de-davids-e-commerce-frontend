// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWUZRHS0ItunIz9GbLt1SboWg_O7gmlh0",
  authDomain: "de-davids.firebaseapp.com",
  projectId: "de-davids",
  storageBucket: "de-davids.appspot.com",
  messagingSenderId: "874980147800",
  appId: "1:874980147800:web:7f53ee9d7dfa8cde93802d",
  measurementId: "G-CMKVL63KZ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// initialize fiebase authentication
export const auth = getAuth(app)