import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import firebase from "firebase/app";
import config from "./firebase/config/firebase.json";
import "./index.css";

firebase.initializeApp({
  apiKey: "AIzaSyBQmF297lIsHo31dDHm7OcnzecH_IDL7bg",
  authDomain: "matflix-app.firebaseapp.com",
  databaseURL: "https://matflix-app.firebaseio.com",
  projectId: "matflix-app",
  storageBucket: "matflix-app.appspot.com",
  messagingSenderId: "613284371447",
  appId: "1:613284371447:web:3f7ab228c2eb1d6384acf2",
  measurementId: "G-G79X59KQEV",
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
