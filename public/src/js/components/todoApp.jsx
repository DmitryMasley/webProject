import React from "react";
import FilterLink from "./filterLink";
import TodoList from "./todoList";
import AddTodo from "./addTodo";
import Footer from "./footer";


class TodoApp extends React.Component {
    constructor(options){
        super();
        this.addTodo = options.addTodo;
        this.toggleTodo = options.toggleTodo;
        this.setFilter = options.setFilter;
    }
    render(){
        const {todos, visibilityFilter} = this.props;

        return (
            <div>
                <AddTodo addTodo={this.addTodo} />
                <TodoList toggleTodo={this.toggleTodo} {...this.props}/>
                <Footer {...this.props}></Footer>
            </div>
        )
    }
}
export default TodoApp;