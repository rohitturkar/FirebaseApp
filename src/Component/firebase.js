// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/database"

const firebaseConfig = {
  apiKey: "AIzaSyBXbwWH7S6sUYEJMYXu8W4gKzKZYLMFPwA",
  authDomain: "fir-react-e27d6.firebaseapp.com",
  databaseURL: "https://fir-react-e27d6-default-rtdb.firebaseio.com",
  projectId: "fir-react-e27d6",
  storageBucket: "fir-react-e27d6.appspot.com",
  messagingSenderId: "1020502626907",
  appId: "1:1020502626907:web:d3a78d6240e7501a5f657e"
};
const fireDb = firebase.initializeApp(firebaseConfig);
const db= fireDb.database().ref()

export default db;