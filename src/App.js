import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Num = 0;
class App extends Component {
  constructor() {
    super();
    this.state = {
      increment: 0
    }
  }
  render() {
    const { increment } = this.state;
    function Incrementor(increment) {
      return increment;

    }
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
            <section>
            <Incrementor increment={increment}/>
            </section>
          <section>
            <button 
              onClick={() => this.setState({increment:this.state.increment-1})}
              style={{padding:'10px',fontSize:20}}
              disabled={this.state.increment === 0}
              >-
            </button>
            <button 
              onClick={() =>  this.setState({i:this.state.i+1})}
              style={{padding: '10px',fontSize:20}}
            >+
            </button>
          </section>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
