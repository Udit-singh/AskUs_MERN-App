import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBV6epdGBZvNGssdmr916TOgCzhQ6d85cw",
  authDomain: "askus-7f6b8.firebaseapp.com",
  projectId: "askus-7f6b8",
  storageBucket: "askus-7f6b8.appspot.com",
  messagingSenderId: "228217015354",
  appId: "1:228217015354:web:3b88251c19f34bb4263903",
  measurementId: "G-NJCE4BMD04"
};

const firebaseApp = initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
const db = getFirestore(firebaseApp);


export { auth, provider, db };
// export default db;
