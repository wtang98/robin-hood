import firebase from 'firebase/compat/app'
// import "firebase/compat/auth"
import "firebase/compat/firestore"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDXbiUwIR0WVGoSMqr2gVRH-FwxQu55ABQ",
    authDomain: "stocks-9a6e4.firebaseapp.com",
    projectId: "stocks-9a6e4",
    storageBucket: "stocks-9a6e4.appspot.com",
    messagingSenderId: "825492395946",
    appId: "1:825492395946:web:1c758831983dd424ce7dd3",
    measurementId: "G-HSHSBFWKCR"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export { db };