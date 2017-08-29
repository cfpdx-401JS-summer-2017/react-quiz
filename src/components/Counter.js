import React, { Component } from 'react';

export default function Counter(props) {

    render() {
        const { counter, onAdd, onSub } = this.props;
        return (
            <div>
                {counter}
                <button onClick={() => onSub(counter)}>-</button>
                <button onClick={() => onAdd(counter)}>+</button>
            </div>
        );
    }
}
