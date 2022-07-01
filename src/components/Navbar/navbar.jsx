import React, { useState } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavBar() {

  const brandStyle = {
    fontSize: '30px',
  };

  const isLoggedIn = () => {
    if(true) {
      return <Button variant="outline-danger">Login</Button> 
    }
  };

  return (
    <>  
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Navbar.Brand as={Link} to="/" className="brand" style={brandStyle}>CookBook</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            { isLoggedIn() }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );

}
