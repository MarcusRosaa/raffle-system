import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBupBrGf_pQDN3SGqZeNIvp-TUIc5AC8SE',
  authDomain: 'rifa-staging.firebaseapp.com',
  projectId: 'rifa-staging',
  storageBucket: 'rifa-staging.appspot.com',
  messagingSenderId: '48828812315',
  appId: '1:48828812315:web:eff4d95fde5fa5cf2fbcbe',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const storage = getStorage(app);

export { db, auth, storage };
