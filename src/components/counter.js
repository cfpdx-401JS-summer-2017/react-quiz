
import React from 'react';

export default class CounterContainer extends Component {
    
    static propTypes = {
    }
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }
      
      render() {
        return <Counter />;
      }
    }
    
    export function Counter(props) {
    
        render() {
            const { counter } = this.props;
            let currentCounter = this.state.counter;
            
            return(
                <div>
                    <button disabled={this.state.counter === 0} onClick={() => this.setState( this.state.counter - 1)}>-</button>
                    <p>currentCounter</p>
                    <button onClick={() => this.setState(this.state.counter - 1)}>+</button>
    
                </div>
            )
        }
    }
