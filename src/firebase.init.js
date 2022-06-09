// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNlz55U_48UNjtx7BbykGyIG5q0eKZOJk",
  authDomain: "saidul-portfolio.firebaseapp.com",
  projectId: "saidul-portfolio",
  storageBucket: "saidul-portfolio.appspot.com",
  messagingSenderId: "45023615867",
  appId: "1:45023615867:web:f328921044c80d592abbde"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;