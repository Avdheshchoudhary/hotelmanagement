import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Bookings = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in
    const token = localStorage.getItem('token');

    // If token exists, user is logged in, so render the Bookings component
    if (!token) {
      // If token doesn't exist, user is not logged in, so redirect to login page
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div>

      <h1>
        Bookings
      </h1>
    </div>
  );
};

export default Bookings;
