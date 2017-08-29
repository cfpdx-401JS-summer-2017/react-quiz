import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CounterContainer from './counter.js';

class App extends Component {

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //   };
  // }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <CounterContainer />
      </div>
    );
  }
}

export default App;
