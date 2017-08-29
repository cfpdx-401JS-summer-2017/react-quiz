import React, { Component } from 'react';

class Minus extends Component {

    constructor() {
        super();
        this.state = {
            count: 0
        }
    };

    Minus = count => {
        this.setState((state) => {
            return count--;
        })
    }

    render() {
        return (
            <div>
                <button onClick={() => }
            </div>
        );
    }
}

export default Minus;