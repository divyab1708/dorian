import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter ,Routes,Route} from "react-router-dom";
import App from './App';
import Login from './modules/Login/Login';
import Register from './modules/Login/Register';
import reportWebVitals from './reportWebVitals';
import './styles/styles.scss'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
