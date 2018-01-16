import * as loginType from "../actionTypes/LoginType";

const user = {
    username: null,
    password: null,
};


export const loginLoading = (loading) => ({
    type: loginType.LOGIN_LOADING,
    loading
});

export const loginSuccess = (user) => ({
    type: loginType.LOGIN_SUCCESS,
    user
});

export const loginFailure = (error) => ({
    type: loginType.LOGIN_FAILURE,
    error
});

export const login = (user) => {
    return (dispatch) => {
        dispatch(loginLoading(true));
        dispatch(loginSuccess(user))
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
