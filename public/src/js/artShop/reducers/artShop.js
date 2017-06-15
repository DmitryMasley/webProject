import { combineReducers } from "redux";

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
    filters: (state = {}) => state,
    itemsList: (state = defaultItems) => state
});
export default store;
