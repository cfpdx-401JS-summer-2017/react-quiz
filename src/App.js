import React, { Component } from 'react';
import './App.css';
//import presentation from './components/presentation';

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: 1,
      decrState: ''
    }
  }

  handleClick(incr) {
    const value = Math.max(0, this.state.value + incr);
    let decrState = '';
    if (value === 0) decrState = 'disabled';
    this.setState({ value, decrState });
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>React Quiz</h2>
        </div>
        <div id="main">
          <DecrButton decrState={this.state.decrState} label="-" incr={-1} 
            onClick={this.handleClick.bind(this)}
          />
          <div id="value">{this.state.value}</div>
          <IncrButton label="+" incr={1} 
            onClick={this.handleClick.bind(this)}
          />
        </div>
      </div>
    );
  }
}

function DecrButton({ onClick, incr, label, decrState }) {
  return (
    <button className={decrState} onClick={() => onClick(incr)}>
      {label}
    </button>
  );
}
function IncrButton({ onClick, incr, label }) {
  return (
    <button onClick={() => onClick(incr)}>
      {label}
    </button>
  );
}

export default App;
