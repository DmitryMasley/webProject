/**
 * Created by dmasley on 6/1/16.
 */
"use strict";
import util from "./utils/util.js";
import appDispatcher from "./dispatcher/appDispatcher";
import mainView from "./components/mainView.jsx";
import ReactDOM from "react-dom";
import todoStore from "./stores/todoStore";
import counterStore from "./stores/counterStore";
import Counter from "./components/counter";
import TodoApp from "./components/todoApp";
import React from "react";
import Provider from "./components/provider";

const render = ()=>{

    ReactDOM.render(
        <Provider
            store={todoStore}
            addTodo ={ (text) => {
                todoStore.dispatch({
                    type: "ADD_TODO",
                    text: text
                });
            }}
            toggleTodo ={(id) => {
                    todoStore.dispatch({
                        type: "TOGGLE_TODO",
                        id: id
                    });
                }}
            setFilter ={ (filter) => {
                todoStore.dispatch({
                    type: "SET_VISIBILITY_FILTER",
                    filter
                })
            }}>
            <TodoApp/>
        </Provider>,
        document.getElementById("root"));
};
window.todoStore = todoStore;
render();

