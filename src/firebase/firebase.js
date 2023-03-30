import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB71eFW-JZxaS0txHGO_IOBhc1K4R9QjM0",
  authDomain: "olx2-10327.firebaseapp.com",
  projectId: "olx2-10327",
  storageBucket: "olx2-10327.appspot.com",
  messagingSenderId: "463231651592",
  appId: "1:463231651592:web:f97ddcaf17172a3e4926bd",
  measurementId: "G-ELJ6HVPQFD",
};

const server = firebase.initializeApp(firebaseConfig);
const auth = server.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
