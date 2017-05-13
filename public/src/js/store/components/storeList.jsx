import React from "react";
import {connect} from "react-redux";
import List from "./list";


const StoreList = connect(
    (state)=>{
        return {
            items: state.itemsList
        }
    },
    (dispatch)=>{
        return {

        }
    }
)(List);

export default StoreList;