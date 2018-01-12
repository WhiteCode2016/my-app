import { connect } from 'react-redux';
import Login from "../components/Login";
import * as loginActions from "../actions";

const mapStateToProps = (state, ownProps) => ({
    loginStatus: state.loginPageData.loading
});

const mapDispatchToProps = (dispatch) => ({
    onLoginClick: ({username,password}) => {
        dispatch(loginActions.login({username,password}));
    }
});

const LoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);

export default LoginContainer