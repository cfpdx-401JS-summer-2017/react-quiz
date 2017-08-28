import React, { Component } from 'react';

export function Counter(props) {

    const { counter, onAdd, onSub } = this.props;
    render() {
        return (
            <div>
                {counter}
                <button onClick={() => onSub(counter)}>-</button>
                <button onClick={() => onAdd(counter)}>+</button>
            </div>
        );
    }

}