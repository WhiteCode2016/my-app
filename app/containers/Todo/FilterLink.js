import { connect } from 'react-redux'
import Link from "../../components/Todo/Link";
import {setVisibilityFilter} from "../../actions/TodoAction";

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => {
        dispatch(setVisibilityFilter(ownProps.filter))
    }
});

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);

export default FilterLink