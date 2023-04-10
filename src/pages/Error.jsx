import React from 'react';
import {useLocation} from "react-router-dom";

const Error = () => {
    const location = useLocation()
    return (
        <h1 style={{color: "red"}}>
            {location.state.msg? location.state.msg : "Something wrong happened!" }
        </h1>
    );
};

export default Error;