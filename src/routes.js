import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/home/index';
import County from './pages/county/index';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path='/county/:countyName'>
                    <County />
                </Route>
            </Switch>
        </Router >
    )
}

export default Routes;