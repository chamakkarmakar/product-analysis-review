import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './Header.css';

const Header = () => {
  return (
    <Navbar expand="lg md">
      <Navbar.Toggle />
      <Navbar.Collapse>
      <Nav className="justify-content-center bg-light w-75 p-2 my-5 mx-auto" activeKey="/home">
        <Nav.Link href="/home"><h5>HOME</h5></Nav.Link>
        <Nav.Link href="/reviews"><h5>REVIEWS</h5></Nav.Link>
        <Nav.Link href="/dashboard"><h5>DASHBOARD</h5></Nav.Link>
        <Nav.Link href="/blog"><h5>BLOG</h5></Nav.Link>
        <Nav.Link href="/about"><h5>ABOUT</h5></Nav.Link>
      </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;