import ReactDOM from "react-dom";
import React from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { Router, Route } from "react-router";
import { syncHistoryWithStore, routerReducer } from "react-router-redux";
import createBrowserHistory from "history/createBrowserHistory";
import TodoReducer from "./reducers/todoReducer";
import CounterReducer from "./reducers/countReducer";
import TodoApp from "./components/todoApp";
import Counter from "./components/counter";

require("../sass/main.scss");


const store = createStore(combineReducers({
    todo: TodoReducer,
    counter: CounterReducer,
    routing: routerReducer
}));

const history = syncHistoryWithStore(createBrowserHistory(), store);

// history.listen(location => analyticsService.track(location.pathname))

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <div>
                <Route exact={true} path="/todo" component={TodoApp} />

                <Route path="/todo/:id" component={Counter} />

                <Route path="/counter" component={Counter} />
            </div>
        </Router>
    </Provider>,
    document.getElementById("root"));

