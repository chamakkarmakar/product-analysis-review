import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './Header.css';

const Header = () => {
  return (
    <Navbar expand="lg md">
      <Navbar.Toggle />
      <Navbar.Collapse>
      <Nav className="justify-content-center bg-light w-75 p-2 my-5 mx-auto" defaultActiveKey="/home">
        <Nav.Link href="/home">HOME</Nav.Link>
        <Nav.Link href="/reviews">REVIEWS</Nav.Link>
        <Nav.Link href="/dashboard">DASHBOARD</Nav.Link>
        <Nav.Link href="/blog">BLOG</Nav.Link>
        <Nav.Link href="/about">ABOUT</Nav.Link>
      </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;