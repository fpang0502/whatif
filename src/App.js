import React, { Component } from 'react';
import logo from './resources/images/logo.svg';
import './resources/App.css';
import Home from './Home.js';
import { Button } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    
    return (
      <div className>
        <Home message="Hello World!!!"
              color="blue"/>
        <Home message="Bye!"
              color="red"/>
        <Button variant="secondary">Secondary</Button>
      </div>
    );
  }
}

export default App;
