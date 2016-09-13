import React from "react";
import Link from "./link";
import actions from "../actions";
import {connect} from "react-redux";

'use strict';

let FilterLink = connect(
    (state, ownProps)=>{
        return {
            active: ownProps.filter === state.visibilityFilter
        }
    },
    (dispatch, ownProps)=>{
        return {
            onClick: (e)=> {
                dispatch(actions.setFilter(ownProps.filter))
            }
        }
    }
)(Link);

export default FilterLink;