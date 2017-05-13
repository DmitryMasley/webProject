import React from "react";
import TodoList from "./todoList";
import {connect} from "react-redux";
import actions from "../actions";

const getVisibleTodos = (todos, filter)=>{
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
};

const VisibleTodoList = connect(
    (state, query)=>{
        return {
            todos: getVisibleTodos(state.todo.todos, state.todo.visibilityFilter)
        }
    },
    (dispatch)=>{
        return {
            onTodoClick: (id)=>{
                dispatch(actions.toggleTodo(id));
            }
        }
    })(TodoList);
export default VisibleTodoList;