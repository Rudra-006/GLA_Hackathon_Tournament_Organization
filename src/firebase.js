// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHrk5wvMK87uXHup0I-pdIJwP1KBVTpZ4",
  authDomain: "gaming-tournament-organization.firebaseapp.com",
  projectId: "gaming-tournament-organization",
  storageBucket: "gaming-tournament-organization.appspot.com",
  messagingSenderId: "16371113999",
  appId: "1:16371113999:web:8cdf68e4a65169b1a4437a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
