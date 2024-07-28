import React from 'react'
import { Outlet } from 'react-router-dom';
import { useAuth } from '../../context/auth/authContext';

function ProtectedRoutes() {
    const { cookies } = useAuth();

    return cookies.token ? <Outlet/> : <h1> You are not authorized to view</h1>
};

export default ProtectedRoutes;