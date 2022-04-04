import React from 'react';
import 'react-bootstrap'
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {
    const [reviews,setReviews] = useReviews();
    return (
        <div className='w-75 mx-auto'>
            <h1>Review Page</h1>
            <div className="review-card">
            {
                reviews.map(review => <Review
                key={review.id}
                review={review}
                ></Review> 
                 )
            }
            </div>

        </div>
    );
};

export default Reviews;