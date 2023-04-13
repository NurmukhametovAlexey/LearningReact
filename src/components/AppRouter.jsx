import React, {useContext} from 'react';
import {useRoutes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router";
import {AuthContext} from "../context";
import Loader from "./UI/loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);

    const routes = useRoutes(
        isAuth
            ? privateRoutes
            : publicRoutes
    );

    return isLoading ? <Loader/> : routes;
};

export default AppRouter;