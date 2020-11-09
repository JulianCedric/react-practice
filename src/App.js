import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Switch>
          <div className="App">
            <h1>Hi.</h1>
          </div>
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
