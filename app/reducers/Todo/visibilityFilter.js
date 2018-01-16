import * as toDoType from "../../actionTypes/ToDoType";

const visibilityFilter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case toDoType.SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
};

export default visibilityFilter