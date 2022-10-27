import React, { useContext } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { FaCheckCircle, FaCheckSquare } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Checkout = () => {
    const course = useLoaderData();
    const { user } = useContext(AuthContext);
    const { details, image_url, title, courses_content, services } = course;
    return (
        <div>
            <h1 className='text-center m-5'>Checkout Your Course</h1>
            <h3 className='text-center m-5'>{course.title}</h3>
            <Container>
                <Row className='container'>
                    <Col lg='6'>
                        <div className='d-flex flex-column justify-content-center align-items-center mb-2'>
                            <div className='p-5 m-5 blog'>
                                <h4 className='text-center fw-semibold p-1'>Student Info</h4>
                                <p><span className='fw-semibold'>Student Name : </span>{user.displayName}</p>
                                <p><span className='fw-semibold'>Student Email : </span> {user.email}</p>
                                <p><span className='fw-semibold'>Enrolled Course : </span> {course.title}</p>
                                <p><small>You have Succcesfully Enroll our course. Please complete the course to get the certificate & job recommendation letter. Thanks</small></p>
                            </div>
                            <div className='mb-2'>
                                <p className='p-3 m-0 fs-3 fw-semibold'>Our Services :</p>
                                {
                                    services.map(each => <div className='d-flex align-items-center mb-1 gap-2'>
                                        <FaCheckCircle></FaCheckCircle><p className='m-0'>{each}</p>
                                    </div>)
                                }
                            </div>
                        </div>
                    </Col>
                    <Col lg='6'>
                        <div className='mb-5'>
                            <Card>
                                <Card.Img variant="top" src={image_url} className='image' />
                                <div>
                                    <Card.Body>

                                        <h4 className='p-2 fw-bold text-center'>{title}</h4>
                                        <Card.Text className='m-0'>
                                            {details}
                                        </Card.Text>

                                        <div>
                                            <p className='p-3 m-0 fs-4 fw-semibold'>Course Content :</p>
                                            {
                                                courses_content.map(each => <div className='d-flex align-items-center mb-1 gap-2'>
                                                    <FaCheckSquare className='text-success'></FaCheckSquare><p className='m-0'>{each}</p>
                                                </div>)
                                            }
                                        </div>



                                    </Card.Body>
                                </div>

                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Checkout;