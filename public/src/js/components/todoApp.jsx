import React from "react";
import FilterLink from "./filterLink";

class TodoApp extends React.Component {
    constructor(options){
        super();
        this.addTodo = options.addTodo;
        this.toggleTodo = options.toggleTodo;
        this.setFilter = options.setFilter;
    }
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
        return (
            <div>
                <FilterLink filter="SHOW_ALL" setFilter={this.setFilter} currentFilter={visibilityFilter}>Show ALL</FilterLink>
                <FilterLink filter="SHOW_COMPLETED" setFilter={this.setFilter} currentFilter={visibilityFilter}>Show COMPLETED</FilterLink>
                <FilterLink filter="SHOW_ACTIVE" setFilter={this.setFilter} currentFilter={visibilityFilter}>Show ACTIVE</FilterLink>
                <input ref={(node) => {
                    this.todoName = node;
                }}/>
                <button onClick={() => {
                    this.addTodo(this.todoName.value);
                    this.todoName.value = "";
                }}>Add Todo</button>
                <ul>
                    {visibleTodos.map(todo =>
                        <li key={todo.id} onClick={()=>{
                            this.toggleTodo(todo.id);
                        }} style={{
                            textDecoration: todo.completed === true ? "line-through" : "none"
                        }}>
                            {todo.text}
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}
export default TodoApp;