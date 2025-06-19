import { initializeApp } from "firebase/app";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBFOI-t867nyR3EeSrHxfe_TelLMmuoK5g",
    authDomain: "innovationstudio-a1e59.firebaseapp.com",
    projectId: "innovationstudio-a1e59",
    storageBucket: "innovationstudio-a1e59.firebasestorage.app",
    messagingSenderId: "179366961533",
    appId: "1:179366961533:web:3d0c98bffacc4921b6ec14",
    measurementId: "G-WYZGJQZEMM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
/* const appCheck = initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider('6LdX1VUrAAAAAP6In0yYM7K8UlgpYpc-i8K7Jo12'),
    isTokenAutoRefreshEnabled: true,
}); */
export const firestore = getFirestore(app);
export const auth = getAuth();
