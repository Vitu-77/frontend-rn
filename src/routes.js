import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoginPage from './pages/login';
import Home from './pages/home';
import County from './pages/county';
import AddCountyInfos from './pages/addCountyInfos';
import IncomeSource from './pages/incomeSource';
import TouristicSpot from './pages/touristicSpot';
import TouristicSpots from './pages/touristicSpots';

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
                <Route exact path='/county/:county_name'>
                    <County />
                </Route>
                <Route exact path='/county/:county_name/add_infos'>
                    <AddCountyInfos />
                </Route>
                <Route exact path='/county/:county_name/income_sources/:income_source_id'>
                    <IncomeSource />
                </Route>
                <Route exact path='/county/:county_name/touristic_spots/:touristic_spot_id'>
                    <TouristicSpot />
                </Route>
                <Route exact path='/county/:county_name/touristic_spots'>
                    <TouristicSpots />
                </Route>
            </Switch>
        </Router >
    )
}

export default Routes;