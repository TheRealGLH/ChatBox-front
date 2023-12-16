// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAT3vYnjkXZ3AsI9Pz7GPgfOZLiaPWQ8og",
  authDomain: "chatbox-b88f3.firebaseapp.com",
  projectId: "chatbox-b88f3",
  storageBucket: "chatbox-b88f3.appspot.com",
  messagingSenderId: "185668643924",
  appId: "1:185668643924:web:8652c510a66a2a1a0251c1",
  measurementId: "G-Y6P7JWDZY7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);