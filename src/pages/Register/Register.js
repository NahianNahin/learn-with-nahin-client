import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';


const Register = () => {
    // AuthProvider
    const { googlelogIn, githublogIn, createUser, updateUserProfile, emailVerification,facebooklogIn } = useContext(AuthContext);
    const navigate = useNavigate();

    // Handle For Submit Register Form 
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const photoUrl = form.url.value;
        const password = form.password.value;
        const reEnterPassword = form.reEnter.value;
        if (password !== reEnterPassword) {
            toast.error('Password does not match');
            return;
        };
        createUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                form.reset();
                navigate('/home');
                handleUpdateUserProfile(name, photoUrl);
                handleVerifyEmail();
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                toast.error(errorMessage);
            });

    }
    // Handle For Submit Google Login  
    const handleGoogleLogin = () => {
        googlelogIn()
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate('/home');
                toast.success('Successfully login');
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                toast.error(errorMessage);

            });
    }
    // Handle For Submit Github Login  
    const handleGithubLogin = () => {
        githublogIn()
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate('/home');
                toast.success('Successfully login');
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                toast.error(errorMessage);

            });
    }
    // Handle For Submit Facebook Login  
    const handleFacebookLogin = () => {
        facebooklogIn()
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate('/home');
                toast.success('Successfully login');
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                toast.error(errorMessage);
                

            });
    }
    // Handle Update Proflie

    const handleUpdateUserProfile = (name, photoUrl) => {
        const profile = {
            displayName: name,
            photoURL: photoUrl,
        };
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => {
                console.log(error);
            });
    };
    // Handle Verify Email

    const handleVerifyEmail = () => {
        emailVerification()
            .then(() => {
                toast.success('Please Verify your email address.');
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div className='d-flex justify-content-evenly align-items-center flex-column flex-lg-row'>
            <div className=' p-5 m-5  border-3 form'>
                <h3 className='text-center  fw-semibold'>Please Register</h3>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" name='name' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicUrl">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control type="text" placeholder="Photo URL" name='url' />
                    </Form.Group>

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
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Re-enter Password</Form.Label>
                        <Form.Control type="password" placeholder="Re-enter Password" name='reEnter' />
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
                <button onClick={handleFacebookLogin} className='btn btn-outline-primary'><FaFacebook className='me-2'></FaFacebook> Login With Facebook</button>
                <button onClick={handleGoogleLogin} className='btn btn-outline-success'><FaGoogle className='me-2'></FaGoogle> Login With Google</button>
                <button onClick={handleGithubLogin} className='btn btn-outline-dark'><FaGithub className='me-3'></FaGithub>Login With Github</button>
            </div>
        </div>
    );
};

export default Register;