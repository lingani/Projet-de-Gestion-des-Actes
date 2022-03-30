import React from 'react';
import AuthHandler from './authHandler';
import { Route, Redirect } from "react-router-dom";
import MainComponent from '../components/mainComponent';

export var PrivateRouteNew = ({page, activepage, ...rest})=>{
    return(
        <Route
            {...rest}
            render={()=> 
                AuthHandler.loggedIn() ? <MainComponent page={page} activepage={activepage}/> : <Redirect to ="/" />
            }
        />
    );
};