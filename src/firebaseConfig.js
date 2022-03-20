import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGI_ETi5_HbHKg_-VvGsL8WqBamxlRQrI",
  authDomain: "vue3-social-login-practice12.firebaseapp.com",
  projectId: "vue3-social-login-practice12",
  storageBucket: "vue3-social-login-practice12.appspot.com",
  messagingSenderId: "1020787758603",
  appId: "1:1020787758603:web:7c9987bc90241d3e25d90e",
  measurementId: "G-2T9FS3GGQF"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp