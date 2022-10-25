// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAp4ep50Cj6sA15ykI00oC_SppbIQXKDGs",
  authDomain: "clever-tree-auth.firebaseapp.com",
  projectId: "clever-tree-auth",
  storageBucket: "clever-tree-auth.appspot.com",
  messagingSenderId: "558825201158",
  appId: "1:558825201158:web:79080a3afd0b6c5eb9ad87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;