import { combineReducers } from "redux";
import taskReducer from "./taskReducers";

const noteReducer = combineReducers({
    notes_crud : taskReducer
})

export default noteReducer;