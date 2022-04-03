import React from 'react';
import { Nav } from 'react-bootstrap';
import './Home.css';
const Home = () => {
    return (
        <div>
            <Nav className="nav-bar justify-content-center bg-light p-2 my-5 mx-auto" defaultActiveKey="/home">
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
            <main>
                <section className='product'>
                    <div className='product-details'>
                        <h1>Laptop Review</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est accusamus optio, sit ullam placeat facere error molestiae reprehenderit quae voluptatibus?</p>
                    </div>
                    <img src="https://www.bdstall.com/asset/product-image/giant_114153.jpg" alt="" />

                </section>
                <section className='review'>
                    <h1>Customer Review</h1>
                </section>
            </main>
        </div>
    );
};

export default Home;