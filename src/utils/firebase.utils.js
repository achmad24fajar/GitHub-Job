// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBo2SyZP5kaxIaXtghHAytiEKmxc0G8Hgg',
  authDomain: 'github-job-92547.firebaseapp.com',
  projectId: 'github-job-92547',
  storageBucket: 'github-job-92547.appspot.com',
  messagingSenderId: '314706206061',
  appId: '1:314706206061:web:59bfe3cbc5f21025b30e64',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

const provider = new GoogleAuthProvider();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const signOutUser = async () => await signOut(auth);
