import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginContainer from "../containers/LoginContainer";
import Home from "../pages/Home";
import {userIsAuthenticated, userIsNotAuthenticated} from "../auth";

const routes = (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/myApp" component={userIsAuthenticated(Home)} />
                <Route path="/login" component={userIsNotAuthenticated(LoginContainer)} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default routes