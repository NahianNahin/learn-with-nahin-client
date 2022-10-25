import React from 'react';
import { Card } from 'react-bootstrap';

import { Link } from 'react-router-dom';

const CourseSummary = ({ course }) => {
    const { _id, details, image_url, price, title, total_enroll } = course;
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={image_url} style={{height:'200px'}}/>
                <Card.Body>
                    <Card.Title className='fw-semibold'>{title}</Card.Title>
                    <Card.Text>
                    {
                        details.length > 250
                            ?
                            <p> {details.slice(0, 250) + '...'} <Link to={`/courses/course/${_id}`}>Read more</Link></p>
                            :
                            <p>{details}</p>
                    }
                    </Card.Text>
                    <div className='d-flex justify-content-between'>
                    <p><span className='fw-semibold'>Price:</span> {price} Tk</p>
                    <p><span className='fw-semibold'>Enrolled :</span> {total_enroll} Students</p>
                    </div>
                    <button className='btn btn-dark w-100 btn-sm'>Add To Cart</button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CourseSummary;