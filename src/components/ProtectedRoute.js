// ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const token = sessionStorage.getItem('token'); // Check for the token

    // If there's no token, redirect to the sign-in page
    if (!token) {
        return <Navigate to="/signin" />;
    }

    // If authenticated, render the children (protected component)
    return children;
};

export default ProtectedRoute;
