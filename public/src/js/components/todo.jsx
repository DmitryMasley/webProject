import React from "react";
import actions from "../actions";
import {connect} from "react-redux";

class Todo extends React.Component {
    constructor(options){
        super();
    }
    render(){
        return <li onClick={()=>{
            this.props.dispatch(actions.toggleTodo(this.props.id));
        }} style={{
            textDecoration: this.props.completed === true ? "line-through" : "none"
        }}>
            {this.props.text}
        </li>
    }
}
Todo = connect()(Todo);
export default Todo;