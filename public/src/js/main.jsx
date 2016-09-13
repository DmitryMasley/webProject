/**
 * Created by dmasley on 6/1/16.
 */
"use strict";
import ReactDOM from "react-dom";
import todoStore from "./stores/todoStore";
import TodoApp from "./components/todoApp";
import React from "react";
import {Provider} from "react-redux";


ReactDOM.render(
    <Provider
        store={todoStore}
    >
        <TodoApp/>
    </Provider>,
    document.getElementById("root"));

