import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import MenuNavLink from './components/MenuNavLink';
import RouteEnum from '../../../constants/RouteEnum';

export default function MainNav(props) {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href={RouteEnum.Home}>Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href={RouteEnum.Home}>Home</Nav.Link>
          <Nav.Link href={RouteEnum.Episodes}>Episodes</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
