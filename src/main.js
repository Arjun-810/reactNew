import React from "react";
import {Route, Switch } from 'react-router-dom';
import './index.css';
// import Landing from './landing';
import Body from './body';
import App from './App';

function Main() {
    return (
        <main>
            <Switch>
            {/* <Route path="/main" component={Landing} /> */}
            <Route exact path="/" component={Body} />
            <Route exact path="/app/" component={App} />
            </Switch>
        </main>
    )
};
export default Main;