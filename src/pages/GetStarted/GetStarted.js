import React from 'react';
import { Link } from 'react-router-dom';
import pic from '../../Assets/Pik.jpg';

const GetStarted = () => {
    return (
        <div className='mb-4 container'>
            <h1 className='text-center m-5 '>Welcome To Our Website <span className='d-none d-lg-inline text-warning'>||</span> <span className='d-block d-lg-inline text-uppercase fw-semibold'>Learn with <span className='text-danger'>Nahin</span></span></h1>
            <div className='d-flex align-items-center flex-column flex-lg-row  gap-5'>
                <div >
                    <img className='m-3' style={{height: '250px'}} src={pic} alt="" />
                </div>
                <div className=' text-center '>
                    <h2>To Become A Web Developer or Programmer...</h2>
                    <h3>Don't Forget To Visit Our <Link to='/home' className='text-decoration-none fw-semibold'>Home</Link> Page</h3>
                    <Link to='/home'><button className='btn btn-dark py-2 px-3 mt-3'>Get Started </button></Link>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;