<<<<<<< HEAD
 import firebase from 'firebase/app'
 import "firebase/auth"

 const firebaseApp = firebase.initializeApp({
    apiKey: process.env.REACT_FIREBASE_API_KEY  ,
    authDomain: process.env.REACT_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_FIREBASE_APP_ID
 })
 
 export const auth = firebaseApp.auth()
 export default firebaseApp
=======
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';

//const //firebaseConfig = {
   //   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
   //   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
   //   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
   //   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
   //   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
   //   appId: process.env.REACT_APP_FIREBASE_APP_ID
   // };

//  export const auth = app.auth()
//  export default app 
 

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDr27ZARyV849QkgivwFeFNKue3Nu4EeU",
  authDomain: "auth-development-1b4d4.firebaseapp.com",
  projectId: "auth-development-1b4d4",
  storageBucket: "auth-development-1b4d4.appspot.com",
  messagingSenderId: "573226430264",
  appId: "1:573226430264:web:55196c0be88b4a9eecdbcd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export default app
>>>>>>> firebasefeature
