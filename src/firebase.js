import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCLkVmwELSiezXjRU27QdR1a0zYXDAgjRE",
  authDomain: "tinder-clone-f1ebe.firebaseapp.com",
  databaseURL: "https://tinder-clone-f1ebe.firebaseio.com",
  projectId: "tinder-clone-f1ebe",
  storageBucket: "tinder-clone-f1ebe.appspot.com",
  messagingSenderId: "55859324614",
  appId: "1:55859324614:web:14571e93e454b2dc6b19c7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;
