import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import dotenv from 'dotenv';

dotenv.config();

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: 'clothes-store-da372.firebaseapp.com',
  projectId: 'clothes-store-da372',
  storageBucket: 'clothes-store-da372.appspot.com',
  messagingSenderId: '1079127802321',
  appId: '1:1079127802321:web:2e538e44dacb71b13960f0',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
