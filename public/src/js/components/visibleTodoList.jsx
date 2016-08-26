import React from "react";
import TodoList from "./todoList";

class VisibleTodoList extends React.Component {
    componentDidMount(){
        this.unsubscribe = this.context.store.subscribe(()=>{
            this.forceUpdate();
        })
    }
    componentWillUnmount(){
        this.unsubscribe();
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
        const state = this.context.store.getState();

        return (
            <TodoList
                todos={
                    this.getVisibleTodos(state.todos, state.visibilityFilter)
                }
                onTodoClick={this.context.toggleTodo}
            />
        )
    }
}
VisibleTodoList.contextTypes = {
    store: React.PropTypes.object
};
export default VisibleTodoList;