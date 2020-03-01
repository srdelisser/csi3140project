import { firebase } from "@firebase/app";
import "@firebase/firestore";

// firebase init goes here
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCgiYWn_BJL1k_WqJHE3_gbfpPZFXroqfQ",
  authDomain: "cookbook-61d9.firebaseapp.com",
  databaseURL: "https://cookbook-61d9.firebaseio.com",
  projectId: "cookbook-61d9",
  storageBucket: "cookbook-61d9.appspot.com",
  messagingSenderId: "214688260819"
});

export const db = firebaseApp.firestore();