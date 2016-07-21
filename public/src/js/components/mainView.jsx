"use strict";
import React, { Component, PropTypes, ReactDOM } from "react";


class mainView extends Component {
    constructor(data){
        super();
    }
    render(){
        return (
            <h1>{this.props.text}</h1>
        )
    }
}
module.exports = mainView;