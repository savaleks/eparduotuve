import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDQz5pYixpobIg_kwrG-Ovc2XWlPTJtuDE",
    authDomain: "eparduotuve-db.firebaseapp.com",
    databaseURL: "https://eparduotuve-db.firebaseio.com",
    projectId: "eparduotuve-db",
    storageBucket: "eparduotuve-db.appspot.com",
    messagingSenderId: "1046723712433",
    appId: "1:1046723712433:web:10505431fbfff572b6d990",
    measurementId: "G-C2CQN2DJQW"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const loginWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

