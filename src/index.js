import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from "./store";
import MenuPage from './components/pages/MenuPage'
import GamePage from './components/pages/GamePage'
import SettingsPage from './components/pages/SettingsPage'
import HighScorePage from './components/pages/HighScorePage'
import { Route, Switch, HashRouter as Router, Redirect } from 'react-router-dom'
import { routes } from './routes';

const routing = (
    <Provider store={store}>
        <Router >
            <Route exact path={routes.home} render={() => <Redirect to="/menu" />} />
            <Route path={routes.menu} component={MenuPage} />
            <Route path={routes.game} component={GamePage} />
            <Route path={routes.settings} component={SettingsPage} />
            <Route path={routes.highscore} component={HighScorePage} />
        </Router>
    </Provider>
)
ReactDOM.render(routing, document.getElementById('root'));
