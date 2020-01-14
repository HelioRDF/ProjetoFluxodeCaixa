import firebase from 'firebase';

let config = {
    apiKey: "AIzaSyCKxyOfRDHmdFHhZAu0olci77aPfoQKaR0",
    authDomain: "cadastrofirebase-b1595.firebaseapp.com",
    databaseURL: "https://cadastrofirebase-b1595.firebaseio.com",
    projectId: "cadastrofirebase-b1595",
    storageBucket: "cadastrofirebase-b1595.appspot.com",
    messagingSenderId: "272037910661",
    appId: "1:272037910661:web:62a5b29f95bca9b773b1ec"
};

firebase.initializeApp(config);

export default firebase;