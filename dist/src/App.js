import React from "react";
import {
  NavLink,
  Switch,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Routes from "./Routes";
function App() {
  return (
    <Router>
      <div className="app">
        <div className="browser">
          <Navbar />
          <Routes />
        </div>
      </div>
    </Router>
  );
}

export default App;
