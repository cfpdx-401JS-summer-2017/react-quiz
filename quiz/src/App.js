import React, { Component } from 'react';
import './App.css';
import { Number } from './Number';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      number: 1
    }
    this.increaseNumber.bind(this);
    this.decreaseNumber.bind(this);
  }

  increaseNumber(number) {
    this.setState({
      number: this.state.number + 1
    });
  }
  decreaseNumber(number) {
    this.setState({
      number: this.state.number - 1
    });
  }


  render() {
    return (
      <div>
        <button disabled={this.state.number = 0} onClick={() => this.setState({number: this.state.number - 1})}>-</button>
        <Number number={this.state.number} />
        <button onClick={() => this.setState({number: this.state.number + 1})}>+</button>
      </div>
    );
  }
}

export default App;
