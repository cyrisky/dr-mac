import React, { Component } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from './pages/Login'
import Register from './pages/Register'
import Home from "./pages/home";

function App() {
  return ( 
  <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
          </Routes>
  </Router>
  
  );
}

export default App;
