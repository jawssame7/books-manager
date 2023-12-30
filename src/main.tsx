import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDL4rfSI6cn50Aq0__UbzBBiow3Wg_vWIQ",
  authDomain: "books-manager-a336e.firebaseapp.com",
  projectId: "books-manager-a336e",
  storageBucket: "books-manager-a336e.appspot.com",
  messagingSenderId: "516275590965",
  appId: "1:516275590965:web:0c6533c44bbdba03001e7c",
};

// @ts-ignore
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
