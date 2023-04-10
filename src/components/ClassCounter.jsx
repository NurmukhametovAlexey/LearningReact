import React from 'react';

export default class ClassCounter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this, "hello increment!")
        this.decrement = this.decrement.bind(this, "hello decrement!")
    }

    increment(...args) {
        console.log(args.at(0))
        this.setState({count: this.state.count + 1})
    }

    decrement(...args) {
        console.log(args.at(0))
        this.setState({count: this.state.count - 1})
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>Plus!</button>
                <button onClick={this.decrement}>Minus!</button>
            </div>
        )
    }
}
