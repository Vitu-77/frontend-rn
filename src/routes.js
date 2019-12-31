import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoginPage from './pages/login';
import Home from './pages/home';
import County from './pages/county';
import AddCountyInfos from './pages/addCountyInfos';
const Routes = () => {

    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path='/login'>
                    <LoginPage />
                </Route>
                <Route exact path='/county/:countyName'>
                    <County />
                </Route>
                <Route exact path='/county/:countyName/add_infos'>
                    <AddCountyInfos />
                </Route>
            </Switch>
        </Router >
    )
}

export default Routes;