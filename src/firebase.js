import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDvyr8rklOCh-HFr6qx10bI6uto8fAfjgY",
  authDomain: "project-final-front2022.firebaseapp.com",
  projectId: "project-final-front2022",
  storageBucket: "project-final-front2022.appspot.com",
  messagingSenderId: "919858638799",
  appId: "1:919858638799:web:57f7220240c00270d8acba"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
