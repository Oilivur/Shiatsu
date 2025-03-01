// firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {

    apiKey: "AIzaSyDvx-x9dBLlScpFEe2ga0FitMPJznXUvKQ",

    authDomain: "shiatsu-b4dae.firebaseapp.com",

    projectId: "shiatsu-b4dae",

    storageBucket: "shiatsu-b4dae.appspot.com",

    messagingSenderId: "147098176620",

    appId: "1:147098176620:web:d6f498f7f97c7c72e31c49",

    databaseURL: "https://shiatsu-b4dae-default-rtdb.europe-west1.firebasedatabase.app/"

};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { app, auth, database };
