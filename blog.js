// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAfIRAQZe7a8wfuxzQBPOhp85A-vSP_uh8",
    authDomain: "blog-d990f.firebaseapp.com",
    projectId: "blog-d990f",
    storageBucket: "blog-d990f.appspot.com",
    messagingSenderId: "554054001432",
    appId: "1:554054001432:web:396b76593255b39456b46d",
    measurementId: "G-C7QRHX21MK"
  };
  firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.settings({ timestampInSnapshots: true });