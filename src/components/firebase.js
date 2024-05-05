
Use npm

Use a <script> tag
If you're already using npm and a module bundler such as webpack or Rollup, you can run the following command to install the latest SDK (Learn more):

npm install firebase
Then, initialize Firebase and begin using the SDKs for the products you'd like to use.

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTsdcpc7kyRtuMUNJu7iO9rWnkDVRY-a4",
  authDomain: "personal-website-b7d8f.firebaseapp.com",
  projectId: "personal-website-b7d8f",
  storageBucket: "personal-website-b7d8f.appspot.com",
  messagingSenderId: "1049642517170",
  appId: "1:1049642517170:web:e7b13b8e4c1350247cffab",
  measurementId: "G-Y9CPG0BP5F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);