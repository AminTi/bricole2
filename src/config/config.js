import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCQZ7yX00ZKTgEygYaVVyDRFPrGuHuR9cU",
  authDomain: "fir-rest-exjobb.firebaseapp.com",
  databaseURL: "https://fir-rest-exjobb-default-rtdb.firebaseio.com",
  projectId: "fir-rest-exjobb",
  storageBucket: "fir-rest-exjobb.appspot.com",
  messagingSenderId: "797661165389",
  appId: "1:797661165389:web:0efcfde9a53c6b00842904",
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default app;
