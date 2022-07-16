// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMAWvvsjjoePExbB7quaB63p6pSlIFlt4",
  authDomain: "pair-94-dts-mini-project.firebaseapp.com",
  projectId: "pair-94-dts-mini-project",
  storageBucket: "pair-94-dts-mini-project.appspot.com",
  messagingSenderId: "157773305741",
  appId: "1:157773305741:web:cdb49b9437e098c4c34fc4",
  measurementId: "G-64PS6K9B75",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
