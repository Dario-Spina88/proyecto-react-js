import React from "react";
import ReactDOM from "react-dom/client";
import { initializeApp } from "firebase/app";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CartProvider } from "./Context/CartContext";

const firebaseConfig = {
  apiKey: "AIzaSyCtwedQMFJSIF7KeKQ9eGhga0icHiIdwrs",
  authDomain: "proyecto-ventaentradas.firebaseapp.com",
  projectId: "proyecto-ventaentradas",
  storageBucket: "proyecto-ventaentradas.appspot.com",
  messagingSenderId: "930933022420",
  appId: "1:930933022420:web:bd0b03063168e9fe1a6541",
  measurementId: "G-0LZG4QWRSD",
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
