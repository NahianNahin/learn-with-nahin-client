import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='d-flex justify-content-evenly align-items-center flex-column flex-lg-row'>
            <div className=' p-5 m-5  border-3 form'>
            <h3 className='text-center  fw-semibold'>Please Register</h3>
                <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" name='name'/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicUrl">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control type="text" placeholder="Photo URL" name='url'/>
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name='email'/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name='password'/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Re-enter Password</Form.Label>
                        <Form.Control type="password" placeholder="Re-enter Password" name='re-enter'/>
                    </Form.Group>
                    <p>Already have account! <Link className='text-decoration-none fw-semibold' to='/login'> Go to Login</Link></p>
                    
                    <Button variant="dark" type="submit" className='w-100'>
                        Register
                    </Button>
                </Form>
            </div>
            <div className='  flex-shrink-1'>
                <p className='fs-2'>OR</p>
            </div>
            <div className=' p-5 mx-3 w-75 d-flex gap-3 flex-column'>
                <button className='btn btn-outline-success'><FaGoogle className='me-2'></FaGoogle> Login With Google</button>
                <button className='btn btn-outline-dark'><FaGithub className='me-3'></FaGithub>Login With Github</button>
            </div>
        </div>
    );
};

export default Register;