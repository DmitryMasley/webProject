import React from "react";

class AddTodo extends React.Component {
    render(){
        return <div>
            <input ref={(node) => {
                this.todoName = node;
            }}/>
            <button onKeyUp={()=>{

            }} onClick={() => {
                this.props.addTodo(this.todoName.value);
                this.todoName.value = "";
            }}>Add Todo</button>
        </div>
    }
}
export default AddTodo;