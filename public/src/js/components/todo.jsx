import React from "react";

class Todo extends React.Component {
    constructor(options){
        super();
    }
    render(){
        return <li key={this.props.id} onClick={()=>{
            this.props.toggleTodo(this.props.id);
        }} style={{
            textDecoration: this.props.completed === true ? "line-through" : "none"
        }}>
            {this.props.text}
        </li>
    }
}
export default Todo;