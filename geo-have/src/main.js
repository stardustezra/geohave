import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbJSQtO8pt8b3rYT1awo1Q1ahjouQTutw",
  authDomain: "geo-have.firebaseapp.com",
  projectId: "geo-have",
  storageBucket: "geo-have.appspot.com",
  messagingSenderId: "698325287904",
  appId: "1:698325287904:web:5712b1bcc02b13a80ba185",
  measurementId: "G-5DGWFQV789"
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
