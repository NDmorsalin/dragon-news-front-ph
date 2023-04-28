// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBh_4C-4Q9UVjhxPmmzBwzTxiWDWgjlO1Y",
  authDomain: "dragon-news-auth-4b291.firebaseapp.com",
  projectId: "dragon-news-auth-4b291",
  storageBucket: "dragon-news-auth-4b291.appspot.com",
  messagingSenderId: "266528340644",
  appId: "1:266528340644:web:6775b9b07e0ce1e0290431"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth}