import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAvh4ptqHDIiY2QUesBH_Bb14kYqblRJkQ",
    authDomain: "test-e460b.firebaseapp.com",
    databaseURL: "https://test-e460b.firebaseio.com",
    projectId: "test-e460b",
    storageBucket: "test-e460b.appspot.com",
    messagingSenderId: "43840379667",
    appId: "1:43840379667:web:a01c78eab216f8649098e6",
    measurementId: "G-C6X3ZGPC9H"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


export default firebase;