import React from 'react';
import AuthHandler from './authHandler';
import { Route, Redirect } from "react-router-dom";

export var PrivateRoute = ({component:Component, ...rest})=>{
    console.log({...rest});
    console.log({rest});
    return(
        <Route
            {...rest}
            render={(props)=> 
                AuthHandler.loggedIn() ? <Component {...props}/> : <Redirect to ="/" />
            }
        />
    )
};