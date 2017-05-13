require("../../sass/artShop.scss");

import ReactDOM from "react-dom";
import React from "react";
import {createStore, combineReducers} from "redux";
import {Provider} from "react-redux";
import {Route, Router} from "react-router";
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import createBrowserHistory from 'history/createBrowserHistory'

import ArtShopComponent from "./components/artShopComponent";
import ArtShopReducer from "./reducers/artShop";

const ArtShopStore = createStore(combineReducers({
    routing: routerReducer,
    shop:   ArtShopReducer
}));
const history = syncHistoryWithStore(createBrowserHistory(), ArtShopStore);

ReactDOM.render(
    <Provider store={ArtShopStore}>
        <Router history={history}>
            <div>
                <Route exact={true} path="/" component={ArtShopComponent}/>
            </div>
        </Router>
    </Provider>,
    document.querySelector("#root")
);