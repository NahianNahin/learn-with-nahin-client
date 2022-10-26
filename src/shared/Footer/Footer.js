import React from 'react';
import { FaRegCopyright } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <div className='text-center bg-dark text-light p-5 bottom-fixed'>
            <p><small><span className='text-danger fw-semibold'><FaRegCopyright></FaRegCopyright></span> Copy 2022. All Rights Reserved || <span className='text-warning fw-semibold'>Learn With Nahin</span></small></p>

        </div>

    );
};

export default Footer;