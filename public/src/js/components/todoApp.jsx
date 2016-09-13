import React from "react";
import VisibleTodoList from "./visibleTodoList";
import AddTodo from "./addTodo";
import Footer from "./footer";


class TodoApp extends React.Component {
    render(){
        return (
            <div>
                <AddTodo/>
                <VisibleTodoList/>
                <Footer />
            </div>
        )
    }
}
export default TodoApp;