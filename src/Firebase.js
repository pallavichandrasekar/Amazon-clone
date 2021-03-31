import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAhwwhOMAMmd0KHMdLAs6ndV7Caae6tnvo",
    authDomain: "clone-47dfa.firebaseapp.com",
    projectId: "clone-47dfa",
    storageBucket: "clone-47dfa.appspot.com",
    messagingSenderId: "465027631946",
    appId: "1:465027631946:web:e809a8a72c02f1ba614fb3"
  });

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
export {db, auth};