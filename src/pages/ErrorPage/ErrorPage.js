import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h1 className='text-center m-5'>Page Not Found || 404.</h1>
            <h2 className='text-center m-5'>Go back to <Link to='/home' className='text-decoration-none'>Home</Link> page</h2>
        </div>
    );
};

export default ErrorPage;