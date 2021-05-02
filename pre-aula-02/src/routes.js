import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AddMusic from './pages/AddMusic';
import HomePage from './pages/HomePage';
import Music from './pages/Music';
import NotFound from './pages/NotFound';

function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/music" component={Music} />
                <Route exact path="/add-music" component={AddMusic} />
                <Route exact path="*" component={NotFound} />
            </Switch>
        </Router>
    );
}

export default Routes;
