import bootsrap from "bootstrap-sass/assets/javascripts/bootstrap";
import ReactDOM from "react-dom";
import React from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { Route, Router } from "react-router";
import { syncHistoryWithStore, routerReducer } from "react-router-redux";
import createBrowserHistory from "history/createBrowserHistory";
import ArtShopComponent from "./components/artShopComponent";
import ArtShopReducer from "./reducers/artShop";
import AppContainer from "./containers/appContainer";

require("../../sass/artShop.scss");

const ArtShopStore = createStore(combineReducers({
    routing: routerReducer,
    shop: ArtShopReducer
}));
const history = syncHistoryWithStore(createBrowserHistory(), ArtShopStore);

ReactDOM.render(
    <Provider store={ArtShopStore}>
        <Router history={history}>
            <AppContainer>
                <Route exact={true} path="/shop" component={ArtShopComponent} />
                <Route exact={true} path="/shop/:uid" component={ArtShopComponent} />
            </AppContainer>
        </Router>
    </Provider>,
    document.querySelector("#root")
);
