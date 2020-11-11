importScripts('https://www.gstatic.com/firebasejs/8.0.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.0.1/firebase-messaging.js');

// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyBDIVnXHdJYluyEvqWUyM9KRcrmjhq39II",
  authDomain: "expense-tracker-ts-pwa.firebaseapp.com",
  databaseURL: "https://expense-tracker-ts-pwa.firebaseio.com",
  projectId: "expense-tracker-ts-pwa",
  storageBucket: "expense-tracker-ts-pwa.appspot.com",
  messagingSenderId: "441570203219",
  appId: "1:441570203219:web:2f7596dfab2e9be52d58a6"
});
firebase.messaging();