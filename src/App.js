import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import React, { Component } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Login from "./pages/Login";
import Game from "./pages/Game";


class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/game" element={<Game />} />
        </Routes>
      </Router>
    )
  }
}

export default App;
