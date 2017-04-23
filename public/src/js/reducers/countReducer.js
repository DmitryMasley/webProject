"use strict";
/**
 * Created by dmasley on 7/21/16.
 */
const counter = (state=0, action)=>{

    switch(action.type){
        case 'INCREMENT':
            return state+1;
        case "DECREMENT":
            return state-1;
        default:
            return state;

    }
};
export default counter;