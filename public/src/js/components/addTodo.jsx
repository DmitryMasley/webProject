import React from "react";
import actions from "../actions";
import {connect} from "react-redux";

class AddTodo extends React.Component {
    render(){
        return <div>
            <input ref={(node) => {
                this.todoName = node;
            }}/>
            <button onKeyUp={()=>{

            }} onClick={() => {
                this.props.dispatch(actions.addTodo(this.todoName.value));
                this.todoName.value = "";
            }}>Add Todo</button>
        </div>
    }
}
AddTodo = connect()(AddTodo);
export default AddTodo;