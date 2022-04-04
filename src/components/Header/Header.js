import React from 'react';
import { Nav } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <Nav className="nav-bar justify-content-center bg-light w-75 p-2 my-5 mx-auto" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">HOME</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/reviews">REVIEWS</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/dashboard">DASHBOARD</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/blog">BLOG</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/about">ABOUT</Nav.Link>
        </Nav.Item>
      </Nav>
    );
};

export default Header;