import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummary from '../../shared/CourseSummary/CourseSummary';
import './Categories.css'

const Categories = () => {
    const courses = useLoaderData();
    console.log(courses);
    return (
        <div>
            <h2 className='text-center mt-5 fw-semibold'>Total Courses: {courses.length}</h2>
            <div className='course-container p-5'>
                {
                    courses.map(course => <CourseSummary key={course._id} course={course}></CourseSummary>)
                }
            </div>

        </div>
    );
};

export default Categories;