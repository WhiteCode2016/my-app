import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import routes from './route/routes';
import './main.css';
import store from "./store/ConfigureStore";

ReactDom.render(
    <Provider store={store}>
        {routes}
    </Provider>
    , document.getElementById('root'));

/*import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from './TodoList/actions'

// 打印初始状态
console.log(store.getState())

// 每次 state 更新时，打印日志
// 注意 subscribe() 返回一个函数用来注销监听器
let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
)

// 发起一系列 action
store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(setVisibilityFilter("SHOW_COMPLETED"))

// 停止监听 state 更新
unsubscribe();*/

// 打印初始状态
/*
console.log(store.getState());

// 每次 state 更新时，打印日志
// 注意 subscribe() 返回一个函数用来注销监听器
let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);

// 发起一系列 action
store.dispatch(login({"username":"root","password":"123"}));

// 停止监听 state 更新
unsubscribe();*/
