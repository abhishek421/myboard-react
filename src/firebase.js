import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDmzOA0_T1csYSC6xG3WgSTW8gis_Gj6js',
  authDomain: 'myboard421.firebaseapp.com',
  projectId: 'myboard421',
  storageBucket: 'myboard421.appspot.com',
  messagingSenderId: '207966849474',
  appId: '1:207966849474:web:999c85bf931eea2e4eae5b',
  measurementId: 'G-5EX5GFJ587'
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
