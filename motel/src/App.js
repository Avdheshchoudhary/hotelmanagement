import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/AboutUs';
import Bookings from './Components/Bookings';
import Login from './Components/Authentication/Login';
import Signup from './Components/Authentication/signup';
import Profile from './Components/profile';
import Footer from './Components/Footer'


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Profile" element={<Profile />} />
        
      </Routes>

      <Footer/>
    </Router>
  );
}

export default App;
