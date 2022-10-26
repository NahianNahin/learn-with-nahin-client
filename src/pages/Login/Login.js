import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    // Handle For Submit Login Form 
    const handleSubmit = event => {

    }
    // Handle For Submit Google Login  
    const handleGoogleLogin = () => {
        
    }
    // Handle For Submit Github Login  
    const handleGithubLogin = () => {

    }
    return (
        <div className='d-flex justify-content-evenly align-items-center flex-column flex-lg-row'>
            <div className=' p-5 m-5  border-3 form'>
            <h3 className='text-center mb-2 fw-semibold'>Please Login</h3>
                <Form onSubmit={handleSubmit}>                  
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
                    <p>Don't have any account! <Link className='text-decoration-none fw-semibold' to='/register'> Register Now</Link></p>
                    
                    <Button variant="dark" type="submit" className='w-100'>
                        Login
                    </Button>
                </Form>
            </div>
            <div className='  flex-shrink-1'>
                <p className='fs-2'>OR</p>
            </div>
            <div className=' p-5 mx-3 w-75 d-flex gap-3 flex-column'>
                <button onClick={handleGoogleLogin} className='btn btn-outline-success'><FaGoogle className='me-2'></FaGoogle> Login With Google</button>
                <button onClick={handleGithubLogin} className='btn btn-outline-dark'><FaGithub className='me-3'></FaGithub>Login With Github</button>
            </div>
        </div>
    );
};

export default Login;