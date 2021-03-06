import * as toDoType from "../../actionTypes/ToDoType";

const toDos = (state = [], action) => {
    switch (action.type) {
        case toDoType.ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        case toDoType.TOGGLE_TODO:
            return state.map((todo) => {
                if (todo.id === action.id) {
                    // return {...todo, completed: !todo.completed};
                    return Object.assign({},todo,{ completed: !todo.completed})
                } else {
                    return todo;
                }
            });
        default:
            return state
    }
};

export default toDos