import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD0qub44lC6aS-9qrfRX9aQVTmtUOcJGIQ",
  authDomain: "jivanaa.firebaseapp.com",
  projectId: "jivanaa",
  storageBucket: "jivanaa.appspot.com",
  messagingSenderId: "122304619232",
  appId: "1:122304619232:web:ee4cd8e1e4c2d32a11e685",
  measurementId: "G-JYX63B0Q8Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
