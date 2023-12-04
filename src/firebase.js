import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyASNKt9zfWBIVrg2SQMYxu1yvchIvUQRvo",
  authDomain: "sihauth-3ac2d.firebaseapp.com",
  projectId: "sihauth-3ac2d",
  storageBucket: "sihauth-3ac2d.appspot.com",
  messagingSenderId: "591287760902",
  appId: "1:591287760902:web:648d11cfb37b67bfc22b87",
  measurementId: "G-NXP2673P71"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize the auth object with the app

export { auth, app };
