import * as loginType from "../../actionTypes/LoginType";

export const initialState = {
    loading: false,
    error: null,
    user: null
};

const loginPageData = (state = initialState, action) => {
    switch (action.type) {
        case loginType.LOGIN_LOADING:
            return {...state, loading: action.loading};
        case loginType.LOGIN_SUCCESS:
            return {...state, error: null, user: action.user};
        case loginType.LOGIN_FAILURE:
            return{ ...state, error: action.error};
        default:
            return state
    }
};

export default loginPageData