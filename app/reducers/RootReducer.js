import { combineReducers } from 'redux';
import loginPageData from "./Login/LoginPageData";
import visibilityFilter from "./Todo/visibilityFilter";
import toDos from "./Todo/toDos";

const rootReducer = combineReducers({
    loginPageData,
    toDos,
    visibilityFilter
});

export default rootReducer