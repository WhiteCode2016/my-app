import { combineReducers } from 'redux'
import visibilityFilter from './visibilityFilter'
import todos from "./todos";

const todoReducer = combineReducers({
    todos,
    visibilityFilter
})

export default todoReducer