import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from './pages/Login'
import Register from './pages/Register'
import Home from "./pages/home";
import Game from "./pages/Game";
import GameList from "./pages/GameList";
import GameDetails from "./pages/GameDetails";
import Homepageplayers from "./pages/Homepageplayer";
import Profile from "./pages/Profile";


function App() {
  return ( 
  <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route exact path="/game" element={<Game />} />
            <Route exact path="/homepageplayer" element={<Homepageplayers />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/gamelist" element={<GameList />} />
            <Route exact path="/gamedetails" element={<GameDetails />} />
          </Routes>
  </Router>
  
  );

}

export default App;