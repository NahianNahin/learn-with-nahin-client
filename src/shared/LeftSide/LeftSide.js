import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './LeftSide.css';

const LeftSide = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://my-assignment-ten-server-nahiannahin.vercel.app/courses-categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, []);
    let activeStyle = {
        textDecoration: "underline",
        color: "#ffc107",
        fontWeight: "700",
    };
    let inActiveStyle = {
        textDecoration: "none",
        color: "black",
        fontWeight: "400",
    };
    return (
        <div className='position'>
            <h3 className='text-center mt-5 fw-semibold'>All Course Catagories</h3>

            <div className='p-5 ms-4'>
                <p className='fs-4 fw-semibold'>Select Categories : {categories.length}</p>
                {
                    categories.map(category => <p key={category.id}>
                        <NavLink
                            to={`/courses/category/${category.id}`}
                            style={({ isActive }) =>
                                isActive ? activeStyle : inActiveStyle
                            }
                        >{category.category_name}</NavLink>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSide;