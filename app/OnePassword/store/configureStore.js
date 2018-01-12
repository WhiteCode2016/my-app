import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import onePasswordReducer from "../reducers";

const store = createStore(
    onePasswordReducer,
    applyMiddleware(thunk, createLogger())
);

export default store