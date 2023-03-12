// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3zynKeWKIuVrkqKpk2B9j-jIGjl33LIE",
  authDomain: "ecommerce-videojuegos.firebaseapp.com",
  projectId: "ecommerce-videojuegos",
  storageBucket: "ecommerce-videojuegos.appspot.com",
  messagingSenderId: "53574693110",
  appId: "1:53574693110:web:c24774aa197cb80d593cd7",
  measurementId: "G-PBLV5SXHGR"
};

// Initialize Firebase
initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);



