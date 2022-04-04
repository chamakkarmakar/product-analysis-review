import React from 'react';
import { Button } from 'react-bootstrap';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import './Home.css';
const Home = () => {
    const [reviews,setReviews] = useReviews();
    const customerReviews=reviews.slice(0,3);    
    return (
        <div className='w-75 mx-5'>
            <section className='product'>
                <div className='product-details'>
                    <h1>Laptop Review</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est accusamus optio, sit ullam placeat facere error molestiae reprehenderit quae voluptatibus?</p>
                </div>
                <img src="https://www.bdstall.com/asset/product-image/giant_114153.jpg" alt="" />
            </section>
            <section className='review'>
                <h1>Customer Review</h1>
                <div className='customer-review'>
                {
                    customerReviews.map(review => <Review
                        key={review.id}
                        review={review}
                        ></Review> )
                }
                </div>
                <Button className='bg-primary'>see all review</Button>
            </section>
        </div>
    );
};

export default Home;