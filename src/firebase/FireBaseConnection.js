import firebase from 'firebase';

let config = {
    apiKey: "AIzaSyDvrvcA1FXRXFJN3HT8XNnbgi9YWGZDpRo",
    authDomain: "fluxo-de-caixa-2ac3a.firebaseapp.com",
    databaseURL: "https://fluxo-de-caixa-2ac3a.firebaseio.com",
    projectId: "fluxo-de-caixa-2ac3a",
    storageBucket: "fluxo-de-caixa-2ac3a.appspot.com",
    messagingSenderId: "1057218871461",
    appId: "1:1057218871461:web:da333f4e71ebec42cc4d4c"
};

firebase.initializeApp(config);

export default firebase;