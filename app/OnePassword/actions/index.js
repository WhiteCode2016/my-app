import * as loginType from "../actionTypes/LoginType";

export const loginLoading = (loading) => ({
    type: loginType.LOGIN_LOADING,
    payload: loading
});

export const loginSuccess = ({username,password}) => ({
    type: loginType.LOGIN_SUCCESS,
    payload: {username,password}
});

export const loginFailure = (error) => ({
    type: loginType.LOGIN_FAILURE,
    payload: error
});

export const login = ({username,password}) => {
    return (dispatch) => {
        dispatch(loginSuccess({username,password}))
       /* dispatch(loginLoading(true));
        fetch('http://')
            .then((response) => {
                dispatch(loginLoading(false));
                dispatch(loginSuccess(response));
            })
            .catch((error) => {
                dispatch(loginLoading(false));
                dispatch(loginFailure(error));
            })*/
    }
};
