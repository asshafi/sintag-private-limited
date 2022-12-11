// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmKm2I-lFjw9gbVJe2F4KMzqMu2s0R1ZU",
  authDomain: "sintag-private-limited.firebaseapp.com",
  projectId: "sintag-private-limited",
  storageBucket: "sintag-private-limited.appspot.com",
  messagingSenderId: "117122417489",
  appId: "1:117122417489:web:88366402e8b0ca16be4970"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);

export default FirebaseApp;