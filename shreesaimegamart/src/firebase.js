import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBAEAJHce0EMgJUy7B6LLSKek1L3cKMvfk",
  authDomain: "market-ccbdb.firebaseapp.com",
  projectId: "market-ccbdb",
  storageBucket: "market-ccbdb.appspot.com",
  messagingSenderId: "580444515972",
  appId: "1:580444515972:web:acaf0548fa1b5ef9471cd1",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
