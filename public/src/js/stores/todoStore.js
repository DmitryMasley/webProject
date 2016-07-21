/**
 * Created by dmasley on 7/19/16.
 */
import {createStore} from "redux";
import todoReducer from "../reducers/todoReducer";


const store = createStore(todoReducer);

export default store;