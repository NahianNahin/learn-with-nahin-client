import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const PrivateRoutes = ({children}) => {
    // AuthProvider
    const {user} = useContext(AuthContext);
    const location = useLocation();
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
    }
    return children;
};

export default PrivateRoutes;