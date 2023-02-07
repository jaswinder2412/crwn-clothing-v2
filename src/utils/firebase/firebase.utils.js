import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithRedirect,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut, 
  onAuthStateChanged
} from "firebase/auth"; // for the firebase authentication

import { getFirestore, doc, setDoc, getDoc, collection, writeBatch, query, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA9uy5Erc7Yuhtdi4CiI69oTqavKEecIO4",
  authDomain: "crownclothing-ee251.firebaseapp.com",
  projectId: "crownclothing-ee251",
  storageBucket: "crownclothing-ee251.appspot.com",
  messagingSenderId: "897589485238",
  appId: "1:897589485238:web:abba773913a902daa4d017",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleprovider = new GoogleAuthProvider();

googleprovider.setCustomParameters({
  prompt: "select_account", 
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleprovider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleprovider);

export const db = getFirestore(); // Db Created

export const addCollectionAndDocument = async (collectionKey, objectsToAdd) => {
 
  const collectionRef = collection(db, collectionKey);
  console.log("collectionRefs")
  const batch = writeBatch(db)
 
  objectsToAdd.forEach((object)=>{ 
      const docRef = doc(collectionRef,object.title.toLowerCase())
      batch.set(docRef, object)
 
  }) 
  await batch.commit();
  console.log("done")
}

export const getCategoriesAndDocuments =  async () => {
      const collectionRef =  collection(db, 'categories');
      const q = query(collectionRef);
      const querySnapshot = await getDocs(q);
      const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot)=> {
          const {title, items} = docSnapshot.data();
          acc[title.toLowerCase()] = items;
          return acc;
      }, {})

      return categoryMap;
}

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalinformation = { displayName: "" }
) => {
  if (!userAuth) return;

  const userDocref = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocref);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocref, {
        displayName,
        email,
        createdAt,
        ...additionalinformation,
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  return userDocref;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangedListner = (callback) => onAuthStateChanged(auth, callback)