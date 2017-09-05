import React from 'react';

class CounterApp extends React.Component {
    onIncrementNumber(event){
        this.props.onIncrementNumber(1);
    }
    onIncrementNumberAsync(event){
        this.props.onIncrementNumberAsync(1);
    }
    onDecrementNumber(event) {
        this.props.onDecrementNumber(-1);
    }
    render(){
        return (
            <div>
                <p>{this.props.counterApp.value}</p>
                <button onClick={this.onIncrementNumberAsync.bind(this)}>Async+</button>
                <button onClick={this.onIncrementNumber.bind(this)}>+</button>
                <button onClick={this.onDecrementNumber.bind(this)}>-</button>
            </div>
        );
    }
}
export default CounterApp;