import React from 'react';
import { Nav } from 'react-bootstrap';
import './Home.css';
const Home = () => {
    return (
        <div>
            <h1>This is home Page</h1>
            <Nav className="nav-bar justify-content-center bg-light p-2 mx-5" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home">HOME</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/review">REVIEW</Nav.Link>
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
        </div>
    );
};

export default Home;