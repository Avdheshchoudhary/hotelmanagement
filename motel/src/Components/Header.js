import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { FaUser } from 'react-icons/fa';
import logo from '../images/logo.webp';
import { isAuthenticated } from '../Components/Authentication/Auth';

function Header() {
  const [loggedIn, setLoggedIn] = useState(isAuthenticated());
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear token from local storage
    setLoggedIn(false); // Update authentication status
    navigate('/'); // Redirect to home or login page
  };

  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container fluid className='d-flex justify-content-between w-100'>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt='logo' height={50}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex justify-content-between w-75">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            <Nav.Link href="#link">0142-12321344</Nav.Link>
            <Nav.Link as={Link} to="/bookings">Bookings</Nav.Link>
          </Nav>
          <Nav>
            {loggedIn ? (
              <>
                <Button as={Link} to="/profile" variant="outline-light" className="me-2">
                  <FaUser />
                </Button>
                <Button variant="outline-light" onClick={handleLogout}>Logout</Button>
              </>
            ) : (
              <>
                <Button as={Link} to="/login" variant="outline-light" className="me-2">Login</Button>
                <Button as={Link} to="/signup" variant="outline-light">Sign Up</Button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
