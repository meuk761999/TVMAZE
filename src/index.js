import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';

import Interface from './Interface';





const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Interface/>         
  </BrowserRouter>
      </React.StrictMode>
);

