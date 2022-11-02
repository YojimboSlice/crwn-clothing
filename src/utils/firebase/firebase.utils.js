import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCmZwXvaz7SHHEODRiATM-SFgj0_rPCgrQ',
  authDomain: 'crwn-clothing-db-93009.firebaseapp.com',
  projectId: 'crwn-clothing-db-93009',
  storageBucket: 'crwn-clothing-db-93009.appspot.com',
  messagingSenderId: '181212554427',
  appId: '1:181212554427:web:482f1129b731c7a7c5359e',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
