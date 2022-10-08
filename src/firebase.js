import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyC5hhjvfG33SrqKfJ6IC0HUjQpr3T3xNbE",
	authDomain: "facebook-messenger-clone-ba464.firebaseapp.com",
	projectId: "facebook-messenger-clone-ba464",
	storageBucket: "facebook-messenger-clone-ba464.appspot.com",
	messagingSenderId: "1041299789054",
	appId: "1:1041299789054:web:7f5240beaae611e91281af",
	measurementId: "G-LKSS4VV2LR",
});

const db = firebaseApp.firestore();

export default db;
