import {combineReducers} from "redux";

const defaultItems = [
    {
        name: "First item",
        uid: "uid1"
    },
    {
        name: "Second item",
        uid: "uid2"
    }
];
const store = combineReducers({
    filters: (state={})=>{
        return state;
    },
    itemsList: (state=defaultItems)=>{
        return state;
    }
});
export default store;