import React from "react";
import Todo from "./todo";

class TodoList extends React.Component {
    render(){
        const {todos} = this.props;
        return  <ul>
            {todos.map(todo =>
                <Todo key={todo.id} toggleTodo={this.props.onTodoClick}
                      {...todo} />
            )}
        </ul>
    }
}
export default TodoList;