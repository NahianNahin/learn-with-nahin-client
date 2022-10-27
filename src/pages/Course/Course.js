import React, { createRef } from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaCheckCircle, FaCheckSquare, FaDownload, } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";
import './course.css';


const Course = () => {
    const ref = createRef();
    const course = useLoaderData();
    const { _id, details, image_url, price, title, total_enroll, instructor, rating, courses_content, services } = course;

    return (
        <div className='course-details'>
            <div className='d-flex align-items-center mt-5 justify-content-evenly gap-5'>
                <h1 className='text-center fw-semibold '>Our Course Details</h1>
                {/* Handle PDF Generator  */}
                <Pdf targetRef={ref} filename="Course_details.pdf">
                    {({ toPdf }) => <button onClick={toPdf} className='btn'><FaDownload className='fs-2 text-primary'></FaDownload><i className='mx-2'>Download PDF</i></button>}
                </Pdf>


            </div>
            <div className='p-5'>

                <Card>
                    <Card.Img variant="top" src={image_url} className='image' />
                    <div ref={ref} >
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
                            <div className='mb-2'>
                                <p className='p-3 m-0 fs-4 fw-semibold'>Our Services :</p>
                                {
                                    services.map(each => <div className='d-flex align-items-center mb-1 gap-2'>
                                        <FaCheckCircle></FaCheckCircle><p className='m-0'>{each}</p>
                                    </div>)
                                }
                            </div>
                            <div className='d-flex gap-5'>
                                <p><span className='fw-semibold'>Price :</span> {price} Tk</p>
                                <p><span className='fw-semibold'>Enrolled :</span> {total_enroll} Students</p>
                            </div>
                            <div className='d-lg-flex justify-content-between'>

                                <div className='d-flex gap-3 '>
                                    <p className='m-0'><span className='fw-semibold'>Rating :</span> {rating.number}</p>
                                    <p><span className='fw-semibold'>Badge :</span> {rating.badge}</p>
                                </div>
                                <div>
                                    <i className='me-3'> Download Pdf Available</i>
                                </div>
                            </div>
                        </Card.Body>
                    </div>
                    <Card.Body className='m-0'>
                        <Link to={`/checkout/${_id}`}><button className='btn btn-dark w-100 btn-sm'>Get Premium Access</button></Link>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Course;