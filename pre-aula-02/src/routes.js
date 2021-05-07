import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AddMusic from './pages/AddMusic';
import Music from './pages/Music';
import NotFound from './pages/NotFound';
import HomePage from './pages/HomePage';

function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/add-musica" component={AddMusic}/>
                <Route exact path="/minhas-musicas" component={Music}/>
                <Route exact path="*" component={NotFound}/>
            </Switch>
        </Router>

    );
}

export default Routes;
