/**
 * Created by dmasley on 6/1/16.
 */
"use strict";
require("../sass/main.scss");

import ReactDOM from "react-dom";
import todoStore from "./stores/todoStore";
import TodoReducer from "./reducers/todoReducer";
import CounterReducer from "./reducers/countReducer";
import TodoApp from "./components/todoApp";
import Counter from "./components/counter";
import React from "react";
import {createStore, combineReducers} from "redux";
import {Provider} from "react-redux";
import { Router, Route } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import createBrowserHistory from 'history/createBrowserHistory'

const store = createStore( combineReducers({
    todo: TodoReducer,
    counter: CounterReducer,
    routing: routerReducer
  }));

const history = syncHistoryWithStore(createBrowserHistory(), store);

//history.listen(location => analyticsService.track(location.pathname))

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <div>
                <Route path="/todo" component={TodoApp}/>
                <Route path="/counter" component={Counter}/>
            </div>
        </Router>
    </Provider>,
    document.getElementById("root"));

