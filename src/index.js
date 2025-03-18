import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./style.css";
import Abc,{Contactus, Mypage} from './About';
import Mybootstrap from './Mybootstrap';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Abc></Abc>
    <Contactus></Contactus>
    <Mypage></Mypage>
    <Mybootstrap></Mybootstrap>
 
  </React.StrictMode>
);
