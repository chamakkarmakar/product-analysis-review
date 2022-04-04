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
                    <h1>Apple M1 iMAC (24-inch)</h1>
                    <h3>The best 'starter' Mac for creators</h3>
                    <p>Apple's first M1-equipped iMac delivers speed, beauty, and great sound in a slim new design. Apple's new M1-equipped 24-inch iMac is a slender-yet-speedy machine packing great speakers, an excellent webcam and a beautiful screen.</p>
                </div>
                <img src="https://miro.medium.com/max/1400/1*cZikV2VdYYwMToTeOSeKGQ.png" alt="" />
            </section>
            <section className='review'>
                <h2>Customer Review</h2>
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