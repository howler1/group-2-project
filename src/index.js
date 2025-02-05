import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";         
import Home from './Home/Home';
import NavBar from './Home/NavBar';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>


    <Routes>
    <Route path="/" element={<App />} />
      <Route path="/home" element={<Home />} />
      <Route path="/navbar" element={<NavBar/>} />

    </Routes>

    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
