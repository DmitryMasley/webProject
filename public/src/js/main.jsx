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
import {Provider} from "react-redux";

const render = ()=>{

    ReactDOM.render(
        <Provider
            store={todoStore}
        >
            <TodoApp/>
        </Provider>,
        document.getElementById("root"));
};
window.todoStore = todoStore;
render();

