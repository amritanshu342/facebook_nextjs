import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyB5-6pcldeJfLaE2ivgLF54X-3mM12BGRo",
  authDomain: "facebook-9a059.firebaseapp.com",
  projectId: "facebook-9a059",
  storageBucket: "facebook-9a059.appspot.com",
  messagingSenderId: "288057221764",
  appId: "1:288057221764:web:83a3c72e401f0d0aa5d8d1",
  measurementId: "G-8Z0JV4WR6Y"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };