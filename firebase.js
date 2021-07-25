// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDDDf1sNVrdTt96B80w2gb5CXKpQ5Wke-o",
  authDomain: "facebook-clone-2f6fe.firebaseapp.com",
  projectId: "facebook-clone-2f6fe",
  storageBucket: "facebook-clone-2f6fe.appspot.com",
  messagingSenderId: "876656446217",
  appId: "1:876656446217:web:c3c68f0e10b1b58550a1d8",
  measurementId: "G-VH0JPNTEL2",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export {db, storage};