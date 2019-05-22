import {firebase} from "@firebase/app"
import "@firebase/firestore"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC_bQgvZYtcQjwmmXR2I1YfyZLM7P1t9tQ",
    authDomain: "forestvue-8424e.firebaseapp.com",
    databaseURL: "https://forestvue-8424e.firebaseio.com",
    projectId: "forestvue-8424e",
    storageBucket: "forestvue-8424e.appspot.com",
    messagingSenderId: "183393322822",
    appId: "1:183393322822:web:a67743e513f55818"
});

export const db=firebaseApp.firestore();
  