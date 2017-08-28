import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      min: 0,
      show: true
    };
  }

  incrementCount = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }
  decrementCount = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  }

  render() {
    return (
      <div>
        <button onClick={this.incrementCount}>Increment</button>
        <button onClick={this.decrementCount}>Decrement</button>
         {this.state.show ? <h2>{ this.state.clicks}</h2> : ''} 
      </div>
    );
  }
}

export default App;
