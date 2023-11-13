// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2b47q0OIq8kb2Jp7NIgqdS4vRUVMZAk0",
  authDomain: "netflixgpt-61a3d.firebaseapp.com",
  projectId: "netflixgpt-61a3d",
  storageBucket: "netflixgpt-61a3d.appspot.com",
  messagingSenderId: "938342015077",
  appId: "1:938342015077:web:c7cecea6a43fd64876e68c",
  measurementId: "G-QQHV0216ZC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
