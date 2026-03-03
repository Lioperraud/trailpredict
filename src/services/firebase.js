import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAGclKW3tnC8RRufqZjUa1Bvna0XurwbWY',
  authDomain: 'trailpredict-141d5.firebaseapp.com',
  projectId: 'trailpredict-141d5',
  storageBucket: 'trailpredict-141d5.firebasestorage.app',
  messagingSenderId: '159193370678',
  appId: '1:159193370678:web:27756f0b99039ae00e4897',
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)
