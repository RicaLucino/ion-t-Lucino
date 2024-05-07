// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

    apiKey: "AIzaSyARcT7G1X-XkbwIB_iMYesIuzlIZo10twM",
    authDomain: "it35---lucino.firebaseapp.com",
    projectId: "it35---lucino",
    storageBucket: "it35---lucino.appspot.com",
    messagingSenderId: "294721366916",
    appId: "1:294721366916:web:d6569b5ace544f008c0bd1",
    measurementId: "G-RQEPCBFZ1K"

};


// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);

// 
const db = getFirestore(firebaseApp);

export{db}