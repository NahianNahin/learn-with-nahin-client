import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummary from '../../shared/CourseSummary/CourseSummary';

const PopularCourses = () => {
    const courses = useLoaderData();
    const popularCourses = courses.filter(course => course.Popularity === 'High');
    
    
    return (
        <div>
            <h2 className='text-center mt-5 fw-semibold'>Popular Courses: {popularCourses.length}</h2>
            <div className='course-container p-5'>
                {
                    popularCourses.map(course => <CourseSummary key={course._id} course={course}></CourseSummary>)
                }
            </div>

        </div>
    );
};

export default PopularCourses;