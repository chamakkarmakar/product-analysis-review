import React from 'react';
import { Card } from 'react-bootstrap';
import './Review.css';

const Review = (props) => {
    const { name, review, img, rating } = props.review;
    return (
        <Card className='card' style={{ width: '18rem' }}>
            <div className='review-details'>
                <Card.Img variant="top" src={img} />
                <div>
                    <Card.Title>{name}</Card.Title>
                    <small>Rating: {rating}</small>
                </div>
            </div>
            <Card.Body>
                <Card.Text>
                    {review}
                </Card.Text>
            </Card.Body>
        </Card>

    );
};

export default Review;