import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from './pages/Login'
import Register from './pages/Register'
import Home from "./pages/home";
import Game from "./pages/Game";

function App() {
  return ( 
  <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route exact path="/game" element={<Game />} />
          </Routes>
  </Router>
  
  );
}

export default App;
