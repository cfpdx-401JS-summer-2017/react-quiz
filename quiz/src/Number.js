import React, { Component } from 'react';

export class Number extends Component {

    render() {
        let { number } = this.props;

        return (
            <div>
            {number}
            </div>
        )
}
}