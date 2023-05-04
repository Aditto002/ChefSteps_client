// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log("environment variable " , import.meta.env.VITE_PASS)
const firebaseConfig = {
  apiKey: "AIzaSyCELqQNQlVqxzclnvlnVOWfSy0vZ2QJC3E",
  authDomain: "chefsteps-32f99.firebaseapp.com",
  projectId: "chefsteps-32f99",
  storageBucket: "chefsteps-32f99.appspot.com",
  messagingSenderId: "211840765876",
  appId: "1:211840765876:web:44c55a568d0656684bece1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;