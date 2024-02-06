// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBKFf-MVVS90X0b8bBF13PnRGOkY7_fpuI",
  authDomain: "mysecondecommerce-e9f60.firebaseapp.com",
  projectId: "mysecondecommerce-e9f60",
  storageBucket: "mysecondecommerce-e9f60.appspot.com",
  messagingSenderId: "1098051550856",
  appId: "1:1098051550856:web:24fbfcf8542a65f050e93d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };
