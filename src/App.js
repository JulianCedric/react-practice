import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';

class App extends React.Component {
  render() {
  return (
    <Router> 
      <React.Fragment>
        <Switch>
          <div className="App">
            <Navbar />
              <h1>Hello</h1>
            <Route exact path = '/' render={(props) => (<Home {...props} />)}></Route>
          </div>
        </Switch>
      </React.Fragment>
    </Router>
    )
  }
}

export default App;
