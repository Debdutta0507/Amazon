import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFGfMNgEfjZM25snYtI4HvC3mGLQfADXQ",
  authDomain: "clone-cb0a0.firebaseapp.com",
  projectId: "clone-cb0a0",
  storageBucket: "clone-cb0a0.appspot.com",
  messagingSenderId: "290286956144",
  appId: "1:290286956144:web:cc4b4682348988471b0eb5",
  measurementId: "G-MX6Q9GNFHK"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };