import firebase from "firebase/compat/app";
//auth
import {getAuth}from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpxD72ywAKPTDo06FexAwQUL9jCQJvvyQ",
  authDomain: "clone-91c4b.firebaseapp.com",
  projectId: "clone-91c4b",
  storageBucket: "clone-91c4b.appspot.com",
  messagingSenderId: "1089236767975",
  appId: "1:1089236767975:web:f30edfd8fd30f918323e42"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore()