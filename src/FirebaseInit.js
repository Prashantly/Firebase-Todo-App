// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAWVRYCKKrkCPlOIZO6pfQxvDgZCU_wsfo",
    authDomain: "todos-63d20.firebaseapp.com",
    projectId: "todos-63d20",
    storageBucket: "todos-63d20.appspot.com",
    messagingSenderId: "137099525419",
    appId: "1:137099525419:web:04b7b9c90a15fd8bbe596e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);