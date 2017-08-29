import React, { Component } from 'react';


export default class CounterContainer extends Component{

	constructor(props) {
		super(props);
		this.state = {
			count: 0
		};
    }
    
    incrementCount() {
        this.setState({ count: this.state.count + 1});
    }

    decrementCount() {
        this.setState({ count: this.state.count - 1});
    }

    render() {

        return (
            <div>
                <button onClick={() => this.incrementCount()}>
                    + 
                </button>
                <div>{this.state.count}</div>
                <button disabled={!this.state.count} onClick={() => this.decrementCount()}>
                    - 
                </button>
            </div>
        )

    }

}
