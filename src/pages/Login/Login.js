import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { FaGoogle, FaGithub, FaFacebook } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import './Login.css';

const Login = () => {
    // AuthProvider
    const { googlelogIn, githublogIn, login, facebooklogIn } = useContext(AuthContext);
    // For Re-direct Path
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/home';

    // Handle For Submit Login Form 
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                form.reset();
                if (user.emailVerified) {
                    navigate(from, { replace: true });
                }
                else {
                    toast.error('Your email is not verified. Please verify your email.');
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });

    }
    // Handle For Submit Google Login  
    const handleGoogleLogin = () => {
        googlelogIn()
            .then((result) => {
                const user = result.user;
                console.log(user);
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);

            });
    }
    // Handle For Submit Github Login  
    const handleGithubLogin = () => {
        githublogIn()
            .then((result) => {
                const user = result.user;
                console.log(user);
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);

            });
    }
    // Handle For Submit Facebook Login  
    const handleFacebookLogin = () => {
        facebooklogIn()
            .then((result) => {
                const user = result.user;
                console.log(user);
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);

            });
    }
    return (
        <div className='d-flex justify-content-evenly align-items-center flex-column flex-lg-row'>
            <div className=' p-5 m-5  border-3 form'>
                <h3 className='text-center mb-2 fw-semibold'>Please Login</h3>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name='email' />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name='password' />
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
            <button onClick={handleFacebookLogin} className='btn btn-outline-primary'><FaFacebook className='me-1'></FaFacebook> Login With Facebook</button>
                <button onClick={handleGoogleLogin} className='btn btn-outline-success'><FaGoogle className='me-2'></FaGoogle> Login With Google</button>
                <button onClick={handleGithubLogin} className='btn btn-outline-dark'><FaGithub className='me-3'></FaGithub>Login With Github</button>
            </div>
        </div>
    );
};

export default Login;