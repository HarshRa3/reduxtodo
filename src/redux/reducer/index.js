import { combineReducers } from "redux";
import todoReducer from "./reducer";
const rootReducer=combineReducers({
    todoReducer:todoReducer
})
export default rootReducer;