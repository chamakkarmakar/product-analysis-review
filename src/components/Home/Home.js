import React from 'react';
import './Home.css';
const Home = () => {
    return (
        <div>
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
        </div>
    );
};

export default Home;