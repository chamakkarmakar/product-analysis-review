import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './Header.css';

const Header = () => {
  return (
    <Navbar expand="lg md">
      <Navbar.Toggle />
      <Navbar.Collapse>
      <Nav className="justify-content-center bg-light w-75 p-2 my-5 mx-auto" activeKey="/home">
        <Nav.Link href="/home">< h6>HOME</ h6></Nav.Link>
        <Nav.Link href="/reviews">< h6>REVIEWS</ h6></Nav.Link>
        <Nav.Link href="/dashboard">< h6>DASHBOARD</ h6></Nav.Link>
        <Nav.Link href="/blog">< h6>BLOG</ h6></Nav.Link>
        <Nav.Link href="/about">< h6>ABOUT</ h6></Nav.Link>
      </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;