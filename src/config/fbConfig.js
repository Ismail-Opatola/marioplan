import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
 
 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyDIADgQRfQDrcQ7y2PIQjHrMWyTWkt0ifI",
    authDomain: "mario-plan-2dd0c.firebaseapp.com",
    databaseURL: "https://mario-plan-2dd0c.firebaseio.com",
    projectId: "mario-plan-2dd0c",
    storageBucket: "mario-plan-2dd0c.appspot.com",
    messagingSenderId: "964512718513"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;