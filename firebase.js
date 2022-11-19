// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getFirestore, collection , addDoc} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQDhp66POu_SfAi4YBFoZisM3KsWsBptw",
  authDomain: "fir-javascript-crud-cb557.firebaseapp.com",
  projectId: "fir-javascript-crud-cb557",
  storageBucket: "fir-javascript-crud-cb557.appspot.com",
  messagingSenderId: "176328818606",
  appId: "1:176328818606:web:7fa2fc932f92262c28923f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()

export const saveTask = (title, description) => {}
    addDoc(collection(db, 'tasks'), {title, description});

