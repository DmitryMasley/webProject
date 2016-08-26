import React from "react";

class Todo extends React.Component {
    constructor(options){
        super();
    }
    render(){
        return <li key={this.props.id} onClick={()=>{
            this.context.toggleTodo(this.props.id);
        }} style={{
            textDecoration: this.props.completed === true ? "line-through" : "none"
        }}>
            {this.props.text}
        </li>
    }
}
Todo.contextTypes = {
    toggleTodo: React.PropTypes.func
};
export default Todo;