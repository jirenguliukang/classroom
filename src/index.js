import React from 'react';
import {render} from 'react-dom';
import {HashRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './containers/Home/index';
import Lesson from './containers/Lesson/index';
import Profile from './containers/Profile/index';
import App from './containers/App';
import './common/index.css';
import store from './redux/store';
import {Provider} from 'react-redux';
import Detail from "./containers/Detail/index";
import Login from './containers/Login/login';
import Reg from './containers/Reg/login';

window._store=store;

render(
    <Provider store={store}>
    <Router>
        <App>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/lesson" component={Lesson} />
                <Route path="/profile" component={Profile} />
                <Route path="/detail" component={Detail} />
                <Route path="/login" component={Login} />
                <Route path="/reg" component={Reg} />
            </Switch>
        </App>
    </Router>
    </Provider>,
    document.getElementById('root')
)
