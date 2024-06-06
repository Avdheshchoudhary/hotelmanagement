import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { isAuthenticated } from './Auth';

const AdminRoute = ({ path, element }) => {
  const isAuthenticatedAdmin = () => {
    const token = localStorage.getItem('token');
    const userRole = localStorage.getItem('role');
    return isAuthenticated() && userRole === 'admin';
  };

  return isAuthenticatedAdmin() ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default AdminRoute;
