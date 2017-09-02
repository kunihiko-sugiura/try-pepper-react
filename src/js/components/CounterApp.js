import React from 'react';
// import styles from "../../scss/main.scss";

class CounterApp extends React.Component {
    onIncrementNumber(event){
        this.props.onIncrementNumber(1);
    }
    onDecrementNumber(event) {
        this.props.onDecrementNumber(-1);
    }
    render(){
        return (
            <div>
                <p>{this.props.counterApp.value}</p>
                <button
                    onClick={this.onIncrementNumber.bind(this)}
                >+</button>
                <button
                    onClick={this.onDecrementNumber.bind(this)}
                >-</button>
            </div>
        );
    }
}

export default CounterApp;