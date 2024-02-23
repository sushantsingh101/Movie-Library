
import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC-Ph5g_wdS_8ZTlxQBLmts2xI67IY1GdY",
  authDomain: "action-movies-5e401.firebaseapp.com",
  projectId: "action-movies-5e401",
  storageBucket: "action-movies-5e401.appspot.com",
  messagingSenderId: "575375280213",
  appId: "1:575375280213:web:876b8282f3f2a4ddadacdc"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");


export default app;