import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return ( 
  <Router>
    {/* <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/login"}>DR.MAC Binar</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link className="nav-link" to={"/"}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/gamelist"}>Gamelist</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/login"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/register"}>Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>  */}
          <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
          </Routes>
    {/* </div> */}
  </Router>
  
  );
}

export default App;
