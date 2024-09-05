// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcYMl8XwHJkhuraqC7xb1I0QB7IFD39sA", // safe to be public
  authDomain: "capstone-db-c2696.firebaseapp.com",
  projectId: "capstone-db-c2696",
  storageBucket: "capstone-db-c2696.appspot.com",
  messagingSenderId: "436537329350",
  appId: "1:436537329350:web:1aba43e169885b405439c7"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore()

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth() // singleton because we only need one auth service
export const signInWithGooglePopup = ()=> signInWithPopup(auth, provider) // providers can be of many kinds with different parameters

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid) // gets a refrence instance with a path

  console.log(userDocRef)

  const userSnapShot = await getDoc(userDocRef) // reads the reference
  console.log(userSnapShot)

  if(!userSnapShot.exists()) { // if it doesn't exist already then create it
    const {displayName, email} = userAuth // get the name and email from Google Auth
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    } catch (error) {
      console.log(error)
    }
  }

  return userDocRef
}