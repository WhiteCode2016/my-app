import { connect } from 'react-redux'
import * as toDoAction from "../../actions/TodoAction";
import TodoList from "../../components/Todo/TodoList";

const getVisibleTodos = (toDos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return toDos;
        case 'SHOW_COMPLETED':
            return toDos.filter(t => t.completed);
        case 'SHOW_ACTIVE':
            return toDos.filter(t => !t.completed);
        default:
            throw new Error('Unknown filter: ' + filter)
    }
};

const mapStateToProps = (state) => ({
    toDos: getVisibleTodos(state.toDos, state.visibilityFilter)
});

const mapDispatchToProps = {
    onTodoClick: toDoAction.toggleTodo
};

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList