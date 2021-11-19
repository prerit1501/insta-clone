import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyAkWx9D16sqndtygXWRP4Y85CPJj-9WRzQ",
  authDomain: "instagram-b7742.firebaseapp.com",
  projectId: "instagram-b7742",
  storageBucket: "instagram-b7742.appspot.com",
  messagingSenderId: "942622639702",
  appId: "1:942622639702:web:105e9aec56921347be1df7",
};

const firebase = Firebase.initializeApp(config);

const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
