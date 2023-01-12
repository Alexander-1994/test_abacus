import { legacy_createStore as createStore, combineReducers} from "redux";
import { ramp, bone } from "../reducers";

export const store = createStore(
    combineReducers({ramp, bone}), 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);