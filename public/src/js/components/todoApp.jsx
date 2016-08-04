import React from "react";

class TodoApp extends React.Component {
    constructor(options){
        super();
        this.addTodo = options.addTodo;
        this.toggleTodo = options.toggleTodo;
    }
    render(){
        return (
            <div>
                <input ref={(node) => {
                    this.todoName = node;
                }}/>
                <button onClick={() => {
                    this.addTodo(this.todoName.value);
                    this.todoName.value = "";
                }}>Add Todo</button>
                <ul>
                    {this.props.todos.map(todo =>
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