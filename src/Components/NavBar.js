import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


const NavBar = () => {
return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
    <Navbar.Brand style={{marginLeft:'500px',fontWeight:'bold'}} href="#home">Player-FIFA</Navbar.Brand>
    </Container>
</Navbar>
);
};

export default NavBar;
