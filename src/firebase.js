// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLvnXXNhZe402xtIpgi3zjYTC8dM0Ud5g",
  authDomain: "expense-tracker-1fb50.firebaseapp.com",
  projectId: "expense-tracker-1fb50",
  storageBucket: "expense-tracker-1fb50.appspot.com",
  messagingSenderId: "930465483486",
  appId: "1:930465483486:web:4f589dc90c030facc0d04f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
