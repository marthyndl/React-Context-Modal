import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Reports from './pages/reports';
import * as serviceWorker from './serviceWorker';

const Root = (
    <BrowserRouter>
        <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/reports" component={Reports} />
            <Redirect from="/" to="/dashboard" />
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(Root, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
