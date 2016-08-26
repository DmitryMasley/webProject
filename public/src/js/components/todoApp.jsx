import React from "react";
import FilterLink from "./filterLink";
import VisibleTodoList from "./visibleTodoList";
import AddTodo from "./addTodo";
import Footer from "./footer";


class TodoApp extends React.Component {
    render(){
        return (
            <div>
                <AddTodo addTodo={this.context.addTodo} />
                <VisibleTodoList toggleTodo={this.context.toggleTodo} {...this.props}/>
                <Footer></Footer>
            </div>
        )
    }
}
TodoApp.contextTypes = {
    store: React.PropTypes.object,
    setFilter: React.PropTypes.func,
    toggleTodo: React.PropTypes.func,
    addTodo: React.PropTypes.func
};
export default TodoApp;