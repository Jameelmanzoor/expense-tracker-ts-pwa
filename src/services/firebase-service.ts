import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBDIVnXHdJYluyEvqWUyM9KRcrmjhq39II",
  authDomain: "expense-tracker-ts-pwa.firebaseapp.com",
  projectId: "expense-tracker-ts-pwa",
  messagingSenderId: "441570203219",
  appId: "1:441570203219:web:2f7596dfab2e9be52d58a6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();

  export async function initNotification () {
    const permission = await Notification.requestPermission();
    console.log('Permission: ', permission);

    if (permission === 'granted') {
      const token =  await messaging.getToken();
      console.log('Token');
      console.log(token);
      }
  }