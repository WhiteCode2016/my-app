import * as toDoType from "../actionTypes/ToDoType";

let nextTodoId = 0;

export const addTodo = (text) => ({
    type: toDoType.ADD_TODO,
    id: nextTodoId++,
    text
});

export const setVisibilityFilter = (filter) => ({
    type: toDoType.SET_VISIBILITY_FILTER,
    filter
});

export const toggleTodo = (id) => ({
    type: toDoType.TOGGLE_TODO,
    id
});