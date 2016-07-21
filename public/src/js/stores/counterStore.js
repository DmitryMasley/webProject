/**
 * Created by dmasley on 7/21/16.
 */
import {createStore} from "redux";
import counter from "../reducers/countReducer";

const store = createStore(counter);

export default store;
