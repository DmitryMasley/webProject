/**
 * Created by dmasley on 6/1/16.
 */
"use strict";
import util from "./utils/util.js";
import appDispatcher from "./dispatcher/appDispatcher";
import mainView from "./components/mainView.jsx";
import React from "react";
import ReactDOM from "react-dom";

var dispatcher = new appDispatcher();
document.write(util.getMessage());
dispatcher.register(function(data){
    new Promise(function(resolve, reject){

    });
    ReactDOM.render(
        React.createElement(
            mainView,
            data
        ),
        document.getElementsByTagName('body')[0]
    );
});
dispatcher.dispatch({
    text: "New Event Executed"
});