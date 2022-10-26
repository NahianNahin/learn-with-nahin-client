import React from 'react';
import { FaBlog } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import Blog from '../../shared/Blog/Blog';
import './Blogs.css';

const Blogs = () => {
    const blogs = useLoaderData();
    return (
        <div className='container'>
            <h1 className='text-center fw-semibold mt-5 mb-2'>Blogs</h1>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;