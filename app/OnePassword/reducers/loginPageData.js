import * as loginType from "../actionTypes/LoginType";

const loginPageData = (state = {}, action) => {
    switch (action.type) {
        case loginType.LOGIN_LOADING:
            return {...state, loading:action.payload};
        case loginType.LOGIN_FAILURE:
            return{ ...state, error: action.payload};
        case loginType.LOGIN_SUCCESS:
            return {...state, error: null};
        default:
            return state
    }
};

export default loginPageData