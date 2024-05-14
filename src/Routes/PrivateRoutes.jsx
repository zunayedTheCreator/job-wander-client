import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const user1 = localStorage.getItem('loggedUser');
    const user2 = localStorage.getItem('signedUser');
    const location = useLocation();

    if (user1 || user2) {
        return children;
    }

    return <Navigate state={location.pathname} to={'/login'} replace></Navigate>;
};

export default PrivateRoutes;