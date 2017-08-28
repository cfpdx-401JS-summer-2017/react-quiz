import React, { Component } from 'react';
import Counter from './Counter';

export default class CounterContainer {
    constructor() {
        this.state = {
            counter: 0
        };
    }

    addCounter = (current) => {
        const newVal = current++;
        this.setState({
            counter: newVal
        })
    }

    subCounter = (current) => {
        let newVal = current--;
        if (newVal < 0) newVal = 0;
        this.setState({
            counter: newVal
        })
    }

    render() {

        return <Counter counter={this.state.counter} onAdd={this.addCounter} onSub={this.subCounter} />
    }

}