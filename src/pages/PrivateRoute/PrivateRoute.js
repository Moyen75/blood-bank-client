import React from 'react'
import useAuth from '../../context/useAuth'
import { useLocation } from 'react-router'
import { CircularProgress } from '@mui/material'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth()
    let location = useLocation();
    if (loading) {
        return <CircularProgress />
    }
    if (user.email) {
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace />;
}

export default PrivateRoute;
