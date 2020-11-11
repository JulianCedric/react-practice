import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <React.Fragment>
        <Switch>
          <Navbar />

          <div className="App">
            <h1>Hi.</h1>
          </div>
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
