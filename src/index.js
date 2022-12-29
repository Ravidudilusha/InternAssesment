import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reportWebVitals from "./reportWebVitals";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";
import {BrowserRouter as Router} from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import {Provider}from "react-redux";


axios.defaults.baseURL='http://localhost:8080/';
ReactDOM.render(
  <React.StrictMode>
    <Router>
    <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();