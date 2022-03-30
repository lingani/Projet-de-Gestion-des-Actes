import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import {PrivateRouteNew} from './utils/privateRouteNew';
import Login from './pages/login';
import LogoutComponent from './pages/logoutComponent';
import HomeComponent from './pages/homeComponent';
import ActeComponent from './pages/acteComponent';
import PreoccupationComponent from './pages/preoccupationComponent';
import DomaineComponent from './pages/domaineComponent';
import Config from './utils/config';

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={Login}></Route>
            <Route exact path={Config.logoutPageUrl} component={LogoutComponent}></Route>
            <PrivateRouteNew exact path="/home" page={<HomeComponent/>} activepage="0"></PrivateRouteNew>
            <PrivateRouteNew exact path="/actes" page={<ActeComponent/>} activepage="1"></PrivateRouteNew>
            <PrivateRouteNew exact path="/preoccupations" page={<PreoccupationComponent/>} activepage="2"></PrivateRouteNew>
            <PrivateRouteNew exact path="/domaines" page={<DomaineComponent/>} activepage="3"></PrivateRouteNew>
        </Switch>
    </Router>
    
    , document.getElementById("root"))