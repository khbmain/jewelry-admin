// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCW4DokC6zuwQj0lOTdYxqMnpU4fv51xzw',
  authDomain: 'jewelry-4e60d.firebaseapp.com',
  projectId: 'jewelry-4e60d',
  storageBucket: 'jewelry-4e60d.appspot.com',
  messagingSenderId: '493576616233',
  appId: '1:493576616233:web:fe2069a1383cffffccdf38',
  measurementId: 'G-484W203QZ9',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
