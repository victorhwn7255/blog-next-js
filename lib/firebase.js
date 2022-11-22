import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCnmy_L0hQq-2g7bKjjE8PQyGQ9eYA2lqM",
  authDomain: "blog-next-js-ce18a.firebaseapp.com",
  projectId: "blog-next-js-ce18a",
  storageBucket: "blog-next-js-ce18a.appspot.com",
  messagingSenderId: "107828427781",
  appId: "1:107828427781:web:082dff159ef2d6649df06c"
};

if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();

export const storage = firebase.storage();