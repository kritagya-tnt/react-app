// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBt111DBxM_k2BJ0S2_nvVEr_cCQXcYFz8",
  authDomain: "social-media-6f1c1.firebaseapp.com",
  projectId: "social-media-6f1c1",
  storageBucket: "social-media-6f1c1.appspot.com",
  messagingSenderId: "501446840311",
  appId: "1:501446840311:web:863042aa6e666530f5a8f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);