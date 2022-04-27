  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDHP2ehvF6LibZEPWRGdQ4wavMEG8vRz70",
    authDomain: "mateotiendacesde.firebaseapp.com",
    projectId: "mateotiendacesde",
    storageBucket: "mateotiendacesde.appspot.com",
    messagingSenderId: "281548750832",
    appId: "1:281548750832:web:a2638e60ec3cd8eae7e735",
    measurementId: "G-P0D6RHQ0Z5"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);