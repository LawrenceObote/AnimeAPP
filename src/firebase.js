import * as firebase from 'firebase';
import 'firebase/firestore';

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "animeapi-10ee6.firebaseapp.com",
    databaseURL: "https://animeapi-10ee6.firebaseio.com",
    projectId: "animeapi-10ee6",
    storageBucket: "animeapi-10ee6.appspot.com",
    messagingSenderId: "1075649920725",
    appId: "1:1075649920725:web:7b5ea6fc5344ce1f6bec5c",
    measurementId: "G-RJV2EK5NLX"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  firebase.analytics();

  export default firebase;