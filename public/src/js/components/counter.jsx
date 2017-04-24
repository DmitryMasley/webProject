import React from "react";
import {connect} from "react-redux";

class Counter extends React.Component {
    render() {
        return <div className="alert alert-success">
            <div className="panel-body">
                <h1>{this.props.value}</h1>
                <button onClick={this.props.onIncrement}>+</button>
                <button onClick={this.props.onDecrement}>-</button>
            </div>
        </div>
    }
}

const CounterWrapper = connect(
    (state)=>{
        return {
            value: state.counter
        }
    },
    (dispatch)=>{
        return {
            onIncrement: function(){
                dispatch({type:"INCREMENT"})
            },
            onDecrement: function(){
                dispatch({type:"DECREMENT"})
            }
        }
    }
)(Counter);
export default CounterWrapper;