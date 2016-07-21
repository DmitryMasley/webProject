/**
 * Created by dmasley on 6/1/16.
 */
"use strict";
import util from "./utils/util.js";
import appDispatcher from "./dispatcher/appDispatcher";
import mainView from "./components/mainView.jsx";
import React from "react";
import ReactDOM from "react-dom";
import todoStore from "./stores/todoStore";
import counterStore from "./stores/counterStore";
import Counter from "./components/counter";

const render = ()=>{
    ReactDOM.render(
        React.createElement(Counter,
            {
                value:counterStore.getState(),
                onIncrement:()=>{
                    counterStore.dispatch({
                        type: "INCREMENT"
                    });
                },
                onDecrement:()=>{
                    counterStore.dispatch({
                        type: "DECREMENT"
                    });
                }
            }),
        document.getElementById("root")
    );
};
counterStore.subscribe(render);
render();
