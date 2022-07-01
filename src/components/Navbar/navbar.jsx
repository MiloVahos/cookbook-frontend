import React, { useState } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavBar() {

  const brandStyle = {
    fontSize: '30px',
  };

  /*const [ loginSuccesful, setLoginSuccesful ] = useState(false);
  const [ usuario, setUsuario ] = useState(null);


  const login = async () => {



    await firebaseApp.auth().signInWithPopup(googleAuthProvider).then(result => {
      setUsuario(result);
      setLoginSuccesful(true);
    })
    .catch(error => {
      console.log(error.message)
    });
  };

  const logOut = async () => {
    await firebaseApp.auth().signOut();
    setLoginSuccesful(false);
  }*/

  const isLoggedIn = () => {
    if(true) {
      return <Button variant="outline-danger" /*onClick={loginWithGoogle}*/>Login</Button> 
    }
    /*return (
      <>
        <Navbar.Brand>Hola{ usuario.user.displayName }</Navbar.Brand>
        <Button variant="outline-danger" onClick={logOut}>Salir</Button>
      </>
    )*/
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
