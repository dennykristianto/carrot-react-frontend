import {createStore, combineReducers} from "redux";
import userReducer from "./userReducer";

export const reduxStore = createStore(combineReducers({
    users: userReducer
}));

