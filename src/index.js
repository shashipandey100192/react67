import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css";
import Abc,{Contactus, Mypage} from './About';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Abc></Abc>
    <Contactus></Contactus>
    <Mypage></Mypage>
 
  </React.StrictMode>
);
