// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSmB6RjDd2-wTCQK93MsAp6CtPOTd_UIA",
  authDomain: "educaibd.firebaseapp.com",
  projectId: "educaibd",
  storageBucket: "educaibd.appspot.com",
  messagingSenderId: "526055905517",
  appId: "1:526055905517:web:0646ae1d4890121d3494e4"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;