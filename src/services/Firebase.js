// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoJtpLa5BZ8lliS_gCVhAyjNLbuHLdqdE",
  authDomain: "binar-fsw15-group-1.firebaseapp.com",
  projectId: "binar-fsw15-group-1",
  storageBucket: "binar-fsw15-group-1.appspot.com",
  messagingSenderId: "990147697457",
  appId: "1:990147697457:web:66fba722bb283c73156e10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth() 