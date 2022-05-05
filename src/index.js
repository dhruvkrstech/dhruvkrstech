import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Router, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import Form from './Form';
import Kaka from './kaka'
import Test from './Test';
import Subsection from './Subsection';
import Main from './Main';
import DemoForm from './DemoForm';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App/>
  // </React.StrictMode>
  <div>
    <App />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
















