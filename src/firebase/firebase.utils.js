import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDNX511RYTb7ZTPeknI_U5F7u5UdjGsLhY",
    authDomain: "crwn-db-35647.firebaseapp.com",
    databaseURL: "https://crwn-db-35647.firebaseio.com",
    projectId: "crwn-db-35647",
    storageBucket: "crwn-db-35647.appspot.com",
    messagingSenderId: "46622832086",
    appId: "1:46622832086:web:82966972da87fa43b8e077",
    measurementId: "G-VCCBZDGKXE"
  };

  firebase.initializeApp(config);

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.id}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
          console.log('error creating user', error.message);

      }
    }
    
    return userRef;

  };


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;