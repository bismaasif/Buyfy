import firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDcSTeLiZelR7euWSoHQn0woQjy8bAo_CM",
    authDomain: "buyfy-46f17.firebaseapp.com",
    projectId: "buyfy-46f17",
    storageBucket: "buyfy-46f17.appspot.com",
    messagingSenderId: "984097535196",
    appId: "1:984097535196:web:f7a190c80e46d3bd59f019"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export var auth=firebase.auth();
export var firestore=firebase.firestore();
export var Googleauthprovider=new firebase.auth.GoogleAuthProvider();
export var serverTimestamp=()=>firebase.firestore.FieldValue.serverTimestamp();
export var storage=firebase.storage().ref();
export default firebase;
  