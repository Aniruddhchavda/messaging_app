import firebase from "firebase/app";
import "firebase/auth";


export const auth = firebase.initializeApp({
    apiKey: "AIzaSyB9aQcTT_LVXDEiCOYyWPqX9CvEyHIxfYs",
    authDomain: "anissenger-4b8bc.firebaseapp.com",
    projectId: "anissenger-4b8bc",
    storageBucket: "anissenger-4b8bc.appspot.com",
    messagingSenderId: "190831139148",
    appId: "1:190831139148:web:9dbf7f54648df4c7da97e9"
  }).auth();