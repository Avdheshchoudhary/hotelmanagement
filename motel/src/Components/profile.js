import React, { useState, useEffect } from 'react';
// import logo from '../images/logo.png'; // Import your logo image
import './Profile.css'

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('No token found');
        }

        const response = await fetch('http://localhost:5000/profile', {
          method: 'GET',
          headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch profile data');
        }
        
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchProfileData();
  }, []);

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <img src='https://th.bing.com/th?id=OIP.YzahJtw1HMse2WG61vBoRwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2' alt="Logo" className="logo" style={{height:'300px', width:"300px"}} />
      {userData ? (
        <div className="profile-details">
          <p>Username: {userData.username}</p>
          {/* <p>Role: {userData.role}</p> */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default Profile;
