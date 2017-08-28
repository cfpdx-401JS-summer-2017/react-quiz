import React, { Component } from 'react';
import Counter from '../components/Counter';

class CounterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      increment: 'inc',
      currentVal: 0
    };
  }

  updateCounter(target) {
    let currV = this.state.currentVal;
    target === 'inc' ? currV++ : currV--;
    this.setState({ currentVal: currV });
  }

  render() {
    const { increment, currentVal } = this.state;
    return (
      <Counter
        currentVal={currentVal}
        increment={increment}
        updateCounter={target => this.updateCounter(target)}
      />
    );
  }
}

export default CounterContainer;
