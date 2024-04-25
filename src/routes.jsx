import React from "react";

import { Navigate, Route, redirect } from "react-router-dom";
import { isAuthenticated } from "./auth"

const validacaoUsuario = () => {
    return !!localStorage.getItem('usuarioValidado')
}

const PrivateRoute = ({ children }) => {
    if (validacaoUsuario() == false) {
        return <Navigate to="/"/>
    }

    return children;
}

export default PrivateRoute;