import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA7CXB5zZ5CMiPGZr7SLaeDJYAgBwhMVcM",
  authDomain: "linkedin-clone-edb7f.firebaseapp.com",
  projectId: "linkedin-clone-edb7f",
  storageBucket: "linkedin-clone-edb7f.appspot.com",
  messagingSenderId: "444439985490",
  appId: "1:444439985490:web:8fbea1aa996e4a336b8e8b",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };

export default db;
