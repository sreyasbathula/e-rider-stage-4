import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
var firebaseConfig = {
    apiKey: "AIzaSyDUNMxmJbm6_O2nL82_AJ31cdv22dM8SRY",
    authDomain: "e-ride-stage-4-f2843.firebaseapp.com",
    projectId: "e-ride-stage-4-f2843",
    storageBucket: "e-ride-stage-4-f2843.appspot.com",
    messagingSenderId: "335831482428",
    appId: "1:335831482428:web:69980adb66c35272bdc339"
  };




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


