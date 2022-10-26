import React from 'react';
import { Image } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import hero from '../../Assets/learning-education-ideas-insight-intelligence-study-concept.jpg'
import './Home.css'
const Home = () => {
    
    return (
        <div className='text-center p-5 border-0 bg'>
            <div className='hero'>
                <div >
                    <h1 className='heading1 '>Learn With <span style={{ color: 'orangered' }} className='fw-semibold '>nahin</span></h1>
                    <p className='fs-5 px-5 py-2'>Learn with Nahin is a awesome learning platform. In our platform we offer IT relatate education. In our courses , there are various type of categories of courses. The categories include Mern Stack Web development, CSS Framework, Programing Languages, Fontend Web Development, Backend Web Development, Popular CMS Development, Cyber Security etc.</p>
                    <Link to='/courses'><button  type="button" class="btn btn-dark pointer">Let's Explore Our Courses</button></Link>
                </div>
                <div className='mt-5'>
                    <Image src={hero} style={{ height: '250px', borderRadius: '8px' }}></Image>
                </div>
            </div>


        </div>
    );
};

export default Home;