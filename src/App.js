import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import CounterContainer from './components/CounterContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Counter Quiz</h2>
        </div>
        <p className="App-intro">
          <CounterContainer />
        </p>
      </div>
    );
  }
}

export default App;
