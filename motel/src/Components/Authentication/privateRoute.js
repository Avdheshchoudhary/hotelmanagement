// PrivateRoute.js

import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { isAuthenticated } from './Auth'; // Adjust the path as per your project structure

const PrivateRoute = ({ element, ...rest }) => {
  return (
    <Route
      {...rest}
      element={isAuthenticated() ? element : <Navigate to="/login" />}
    />
  );
};

export default PrivateRoute;
