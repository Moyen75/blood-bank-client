import React from 'react'
import useAuth from '../../context/useAuth'
import { useLocation } from 'react-router'
import { CircularProgress } from '@mui/material'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth()
    let location = useLocation();
    const isAuth = localStorage.getItem('isLoggedIn')
    if (isAuth ==='loggedIn') {
        if (user.email) {
            return children;
        } else if (loading) {
            return <CircularProgress />
        }
    }
    return <Navigate to="/login" state={{ from: location }} replace />;
}

export default PrivateRoute;
