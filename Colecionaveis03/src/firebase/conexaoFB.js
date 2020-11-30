import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCR31gU0HIj7kgdqNm_cgUfVLrPc39zagU",
    authDomain: "colecionaveisfb-55b03.firebaseapp.com",
    databaseURL: "https://colecionaveisfb-55b03.firebaseio.com",
    projectId: "colecionaveisfb-55b03",
    storageBucket: "colecionaveisfb-55b03.appspot.com",
    messagingSenderId: "463111239522",
    appId: "1:463111239522:web:d485822e8e2d958eab9e3b",
    measurementId: "G-4C9ZRLWJL0"
};

var app = firebase.initializeApp(firebaseConfig);

export const conexaoFS = app.firestore();