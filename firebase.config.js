// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCggTPdXgu4xZLieJAEzaQ-q8_OPQEbp04",
  authDomain: "proyecto3dwebzes.firebaseapp.com",
  projectId: "proyecto3dwebzes",
  storageBucket: "proyecto3dwebzes.appspot.com",
  messagingSenderId: "238231081344",
  appId: "1:238231081344:web:d33b6fcda475354a22f165"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Firebase Firestore and get a reference to the service
export const db = getFirestore(app);