import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBztKpbQ-6Lkxgby9aYdCoEQhUHx8WNBKo",
  authDomain: "plantdiary-1f4fb.firebaseapp.com",
  projectId: "plantdiary-1f4fb",
  storageBucket: "plantdiary-1f4fb.appspot.com",
  messagingSenderId: "90506627889",
  appId: "1:90506627889:web:7e53676518537e2029fe10",
  measurementId: "G-04Y48XBEV8"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const apiKey = firebaseConfig.apiKey;

export { auth, apiKey };