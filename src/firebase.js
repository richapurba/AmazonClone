import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtZXygj9e7Qkw6unU9JhbidP82Nf-Nav8",
  authDomain: "clone-71025.firebaseapp.com",
  projectId: "clone-71025",
  storageBucket: "clone-71025.appspot.com",
  messagingSenderId: "238641029218",
  appId: "1:238641029218:web:f0f403e71d8b4b0b0db13b",
  measurementId: "G-DPQWDBCE10"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export {db, auth};