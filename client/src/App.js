import React, { Component } from 'react';
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import Homepage from "./components/Homepage";
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <div>
  <Switch>
  <Route exact path="/" component={Homepage} />
    </Switch>
    </div>
    </Router>
      </div>
    );
  }
}

export default App;
