import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'; // for the firestore database
import 'firebase/compat/auth'; // for authentication

const config = {
  apiKey: "AIzaSyDwN-F80QXH3d8VUQ5Z2XpzIoDkKlDy3fc",
  authDomain: "crwm-db-4c10c.firebaseapp.com",
  projectId: "crwm-db-4c10c",
  storageBucket: "crwm-db-4c10c.firebasestorage.app",
  messagingSenderId: "728834370599",
  appId: "1:728834370599:web:3f7c7926b2280986e0b202",
  measurementId: "G-YXJWJ8CPNM"
};
export const createUserProfileDocument  = async(userAuth, additionalData) => {
  if(!userAuth) return;
  const userRef = firestore.doc('user/${userAuth-uid');
  const snapShot = await userRef.get();
  console.log(snapShot);
  if(!snapShot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try{
      await userRef.set({
        displayName,email,createdAt,...additionalData
      })
    }
    catch(err){
      console.log('error creating user', err.message);
    }
  }
  return userRef;
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore(); 

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
