import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from "./App";
import './main.css';
import { createStore } from 'redux'
// import rootReducer from "./TodoList/reducers";
import { Provider } from 'react-redux'
import rootReducer from "./OnePassword/reducers";
import {login} from "./OnePassword/actions";
import store from "./OnePassword/store/configureStore";

// const store = createStore(rootReducer)

ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
