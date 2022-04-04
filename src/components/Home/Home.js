import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import './Home.css';
const Home = () => {
    const [reviews,setReviews] = useReviews();
    const customerReviews=reviews.slice(0,3);    
    return (
        <div>
            <section className='product'>
                <div className='product-details'>
                    <h1>Laptop Review</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est accusamus optio, sit ullam placeat facere error molestiae reprehenderit quae voluptatibus?</p>
                </div>
                <img src="https://miro.medium.com/max/1400/1*cZikV2VdYYwMToTeOSeKGQ.png" alt="" />
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
                <Link to='/reviews'>
                <button className='btn-review'>See All Reviews</button>
                </Link>
            </section>
        </div>
    );
};

export default Home;