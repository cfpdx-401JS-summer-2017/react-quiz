import React, { Component } from 'react';

export default class CounterContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      minusDisabled: true
    };
  }

  counter(increment) {
    const oldCount = this.state.count;
    let newCount = oldCount + increment;
    this.setState({ count: newCount });

    if (this.state.count > `) this.setState({ minusDisabled: false });
    else this.setState({ minusDisabled: true });
  }

  render() {
    return(
      <div>
        <button disabled={this.state.minusDisabled} onClick={() => this.counter(-1) }> - </button>
        <p>{this.state.count}</p>
        <button onClick={() => this.counter(1) }> + </button>
      </div>
    );
  }

}

export function Counter(props) {

}