import React from "react";

import { Route, redirect } from "react-router-dom";
import { isAuthenticated } from "./auth"

const PrivateRoute = ({ component: Component, ...rest }) => {
    <Route {...rest} render={props => (
        isAuthenticated() ? (
            <Component {...props} />
        ) : (
            redirect({ to: "/", state: {from: props.location}})
        )
    )}
    />
}

export default PrivateRoute;