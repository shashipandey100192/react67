import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./style.css";
import Abc,{Contactus, Mypage} from './About';
import Mybootstrap from './Mybootstrap';
import Myreactbootstrap from './Myreactbootstrap';
import MyMUIpage from './MyMUIpage';
import Mypage1 from './Mypage';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Mypage1></Mypage1>
    <Abc></Abc>
    <Contactus></Contactus>
    <Mypage></Mypage>
    <Mybootstrap></Mybootstrap>
    <Myreactbootstrap></Myreactbootstrap>
    <MyMUIpage></MyMUIpage>
 
  </React.StrictMode>
);
