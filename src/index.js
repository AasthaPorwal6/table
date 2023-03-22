import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import './index.css';
<<<<<<< HEAD
import Home from './Home.js';
import Table from './Table.js';
=======
import App from './App';
import Home from './Home.js';
import Table from './Table.js';
import table from './table.css';
import home from './home.css';
>>>>>>> a7c89bab5535aa3c03d3e02cb24edc9b501be7dd
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/table" element={<Table />} />
    </Routes>
  </BrowserRouter>
=======
    <Home/>
    <Table/>
>>>>>>> a7c89bab5535aa3c03d3e02cb24edc9b501be7dd
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();