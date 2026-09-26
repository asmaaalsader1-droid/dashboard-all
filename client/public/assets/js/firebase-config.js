// إعدادات Firebase — مشروع kuwait-me
const firebaseConfig = {
  apiKey: "AIzaSyA_do_43poH27AxIoz2LfIJtWFKqpJjQqU",
  authDomain: "kuwait-me.firebaseapp.com",
  databaseURL: "https://kuwait-me-default-rtdb.firebaseio.com",
  projectId: "kuwait-me",
  storageBucket: "kuwait-me.firebasestorage.app",
  messagingSenderId: "953252949636",
  appId: "1:953252949636:web:4a8c3caaffbd60741cdcd1"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const rtd = firebase.database();
window.db = db;
window.rtd = rtd;
