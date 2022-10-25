import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './contact.css'

const Contact = () => {
    return (
        <div className='d-flex justify-content-center align-items-center m-5 p-5 contact-form'>
            <div >
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="dark" type="submit" className='w-100'>
                        Login
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Contact;