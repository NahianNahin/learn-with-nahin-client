import React from 'react';
import { Button, Form, Image } from 'react-bootstrap';
import './contact.css'
import contact from '../../Assets/brainstorm-meeting.jpg'

const Contact = () => {
    return (
        <div className='m-5'>
            <h1 className='text-center fw-semibold'>Contact With Us</h1>
            <p className='text-center'>To contact with us, please fill our contact form with put your comment.</p>
            <div className='d-flex justify-content-evenly align-items-center flex-column flex-lg-row'>
                <div className='mt-5'>
                    <Image src={contact} style={{ height: '350px', borderRadius: '8px' }}></Image>
                </div>
                <div className='my-5 p-5 contact-form'>
                    <Form>
                        <h4 className='text-center'>Contact Form</h4>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control type="text" placeholder="Your Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        
                        <textarea className="form-control mb-3" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                        
                        <Button variant="dark" type="submit" className='w-100'>
                            Send
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Contact;