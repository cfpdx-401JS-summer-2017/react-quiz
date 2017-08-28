import React, { Component } from 'react';
import Counter from '../components/Counter';

class CounterContainer extends Component {
  constructor() {
    super();
    this.state = {
      increment: 1,
      currentVal: 0
    };
  }

  updateCounter(target) {
    console.log('in update counter: ', target)
    this.setState({currentVal: target.value})

  }

  render() {
    const { increment, currentVal, updateCounter } = this.state;
    return <Counter currentVal={currentVal} increment={increment} updateCounter={target =>this.updateCounter(target)}/>;
  }
}

export default CounterContainer;
