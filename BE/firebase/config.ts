import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBgeR9UqPchBp1XabHUehEhYCwIA3gyVr0',
  authDomain: 'cebiche-5a6ba.firebaseapp.com',
  projectId: 'cebiche-5a6ba',
  storageBucket: 'cebiche-5a6ba.appspot.com',
  messagingSenderId: '599395666070',
  appId: '1:599395666070:web:69fb82c33bd7be08521ab7',
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
