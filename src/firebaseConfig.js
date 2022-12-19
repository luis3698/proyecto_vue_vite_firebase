// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdhcr8tqJHtjSXamEpK-is-A0YIGCNmH0",
  authDomain: "vue-pinia-vite-firebase.firebaseapp.com",
  projectId: "vue-pinia-vite-firebase",
  storageBucket: "vue-pinia-vite-firebase.appspot.com",
  messagingSenderId: "1095437044428",
  appId: "1:1095437044428:web:708001f64347f949e9d069"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();

export { auth };