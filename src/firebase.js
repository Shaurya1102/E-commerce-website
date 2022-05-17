// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA4cYm7sKJJCZeLAglW0w9wAKr1aGQAs28",
    authDomain: "e-web-aaa62.firebaseapp.com",
    projectId: "e-web-aaa62",
    storageBucket: "e-web-aaa62.appspot.com",
    messagingSenderId: "99236301068",
    appId: "1:99236301068:web:b6312eeeb92d3dc41a6129",
    measurementId: "G-43KZ7WFNBB"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };