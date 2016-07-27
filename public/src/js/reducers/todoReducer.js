"use strict";
import {combineReducers} from "redux";

const todo = (state = {}, action = {}) => {
    switch(action.type) {
        case "TOGGLE_TODO":
            if (state.id !== action.id) {
                return state;
            } else {
                return Object.assign({}, state, {
                    completed: !state.completed
                });
            };
        case "ADD_TODO":
            return {
                    id: action.id,
                    text: action.text,
                    completed: false
                };
        default:
            return state;
    };
};

const todos = (state = [], action = {})=>{
    switch(action.type){
        case "ADD_TODO":
            return [
                ...state,
                todo(undefined, action)
            ];
        case "TOGGLE_TODO":
            return state.map(t => todo(t, action));
        default:
            return state;
    };
};

const visibilityFilter = (state = "SHOW_ALL", action = {}) => {
    switch(action.type){
        case "SET_VISIBILITY_FILTER":
            return action.filter;
        default:
            return state;
    };
};
const nextId = (state=0, action={}) => {
    switch(action.type){
        case "ADD_TODO":
            return ++state;
        default:
            return state;
    }
};

const todoApp = (state={}, action = {}) => {
    switch(action.type){
        case "ADD_TODO":
            let newState = Object.assign({}, state, {
                nextId:nextId(state.nextId, action)
            });
            newState.todos = todos(state.todos, Object.assign({}, action, {id:newState.nextId}));
            return newState;
        default:
            return {
                todos: todos(state.todos, action),
                visibilityFilter: visibilityFilter(state.visibilityFilter, action),
                nextId: nextId(state.nextId, action)
            };
    }

};
export default todoApp;