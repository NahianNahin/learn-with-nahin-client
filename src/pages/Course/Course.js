import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import './course.css';

const Course = () => {
    const course = useLoaderData();
    const { details, image_url, price, title, total_enroll, instructor, rating } = course;
    return (
        <div className='course-details'>
            <h1 className='text-center fw-semibold mt-5'>Checkout Our Course</h1>
            <div className='p-5'>
                <h4 className='p-2 fw-bold'>{title}</h4>
                <Card>
                    <Card.Img variant="top" src={image_url} className='image' />
                    <Card.Body>
                        <div className='d-flex gap-3 '>
                            <div>
                                <Image
                                    roundedCircle
                                    src={instructor.img}
                                    style={{ height: '50px' }}
                                ></Image>
                            </div>
                            <div>
                                <p className='m-0'><span className='fw-semibold'>Instructor :</span> {instructor.name}</p>
                                <p><span className='fw-semibold'>Course Published :</span>{instructor.published_date}</p>
                            </div>
                        </div>
                        <Card.Text>
                            {details}
                        </Card.Text>
                        <div className='d-flex gap-5'>
                            <p><span className='fw-semibold'>Price:</span> {price} Tk</p>
                            <p><span className='fw-semibold'>Enrolled :</span> {total_enroll} Students</p>
                        </div>
                        <div className='d-lg-flex justify-content-between'>

                            <div className='d-flex gap-3 '>
                                <p className='m-0'><span className='fw-semibold'>Rating :</span> {rating.number}</p>
                                <p><span className='fw-semibold'>Badge :</span> {rating.badge}</p>
                            </div>
                            <div>
                                <i className='me-3'> Download Pdf</i>
                            </div>


                        </div>
                        <button className='btn btn-dark w-100 btn-sm'>Add To Cart</button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Course;