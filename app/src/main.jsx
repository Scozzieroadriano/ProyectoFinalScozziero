import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import { initializeApp } from "firebase/app";
import App from './App.jsx'
import './index.css'

const firebaseConfig = {
  apiKey: "AIzaSyCGMVn3ZkavWUCVba-2wnS43VM96cpIxqc",
  authDomain: "coderproyect-4f210.firebaseapp.com",
  projectId: "coderproyect-4f210",
  storageBucket: "coderproyect-4f210.appspot.com",
  messagingSenderId: "754714908842",
  appId: "1:754714908842:web:cc1f66597542c10eb358d3"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)