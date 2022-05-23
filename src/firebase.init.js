// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBf4p8jWzSqzfGglfZWuurJEet_wosvZmA",
    authDomain: "induscity-6e188.firebaseapp.com",
    projectId: "induscity-6e188",
    storageBucket: "induscity-6e188.appspot.com",
    messagingSenderId: "486005455217",
    appId: "1:486005455217:web:7fbf43c62cafa4fa259ed0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;