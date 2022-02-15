import logo from './logo.svg';
import './App.css';
import React, { Component } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { listGame } from "./data/listGame";

import GameList from "./pages/GameList";
import GameDetails from "./pages/GameDetails";

class App extends Component {
  constructor() {
    super()
    this.state = { listGame }
  }
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/gamelist" element={<GameList />} />
          <Route exact path="/gamedetails" element={<GameDetails />} />
          {/* <Route path={this.state.listGame.gamePage} element={<GameDetails />} /> */}
        </Routes>
      </Router>
    )
  }
}

export default App;
