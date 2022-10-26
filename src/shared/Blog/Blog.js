import React from 'react';
import './Blog.css'


const Blog = ({blog}) => {
    return (
        <div className=' p-5 m-5 blog'>
            <p className='fs-5 fw-semibold'>{blog.question}</p>
            <p>{blog.answer}</p>
        </div>
    );
};

export default Blog;