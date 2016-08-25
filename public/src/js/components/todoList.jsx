import React from "react";
import Todo from "./todo";

class TodoList extends React.Component {
    getVisibleTodos(todos, filter){
        switch (filter){
            case "SHOW_ALL":
                return todos;
                break;
            case "SHOW_ACTIVE":
                return todos.filter(function(todo){
                    return !todo.completed;
                });
                break;
            case "SHOW_COMPLETED":
                return todos.filter(todo => {
                    return todo.completed;
                });
                break;
            default:
                return todos;
        }
    }
    render(){
        const {todos, visibilityFilter} = this.props;
        const visibleTodos = this.getVisibleTodos(todos, visibilityFilter);
        return  <ul>
            {visibleTodos.map(todo =>
                <Todo key={todo.id} toggleTodo={this.props.toggleTodo}
                      {...todo} />
            )}
        </ul>
    }
}
export default TodoList;