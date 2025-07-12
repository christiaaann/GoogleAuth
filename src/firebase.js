// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBiOs5AgW6aCTrO19_iaH5K0LsUVFoMCu0",
  authDomain: "my-firstbackend-853c4.firebaseapp.com",
  projectId: "my-firstbackend-853c4",
  storageBucket: "my-firstbackend-853c4.firebasestorage.app",
  messagingSenderId: "330021199227",
  appId: "1:330021199227:web:df74259570d1fe7452f1de",
  measurementId: "G-YJ775FW8NM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const auth= getAuth(app)

// selec account
provider.setCustomParameters({
 prompt: "select_account"
});


export { app, auth, provider ,analytics };