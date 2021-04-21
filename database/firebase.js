import firebase from 'firebase/app'
import "firebase/auth"
import firestore from 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyBh26WgIC2CtLdgtIxIgqj8Mmj0raxa5E0",
  authDomain: "marble-85d81.firebaseapp.com",
  projectId: "marble-85d81",
  storageBucket: "marble-85d81.appspot.com",
  messagingSenderId: "268540520445",
  appId: "1:268540520445:web:18db90915d8912a7ba9b94"
};

if (!firebase.apps.length) {
  try {
      firebase.initializeApp(firebaseConfig)
  } catch (err) {
      console.error('Firebase initialization error raised', err.stack)
  }
}

firebase.firestore();

export default firebase;