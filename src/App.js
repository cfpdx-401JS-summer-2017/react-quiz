import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }

  Increment = value => {
    this.setState((state) => {
      return {count: state.count+value}
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Really Great Counter</h2>
        </div>
        <main>
          {this.state.count>0 &&
            <button onClick={() => this.Increment(-1)}>-</button>
          }
          <h1>{this.state.count}</h1>
          <button onClick={() => this.Increment(1)}>+</button>
        </main>
      </div>
    );
  }
}

export default App;
