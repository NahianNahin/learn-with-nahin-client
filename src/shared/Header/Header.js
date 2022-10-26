import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { FaAddressCard, FaBlog, FaBookReader, FaHome, FaQuestionCircle, FaSignInAlt } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../Assets/logo.png';

const Header = () => {
    let activeStyle = {
        textDecoration: "underline",
        color: "#ffc107",
        fontWeight: "700",
    };
    let inActiveStyle = {
        textDecoration: "none",
        color: "white",
        fontWeight: "400",
    };
    return (
        <div className='sticky-top'>
            <Navbar className='' bg="dark" expand="lg" variant='dark'>
                <Container>
                    <Image src={logo} style={{ height: '50px' }}></Image>
                    <Link to='/home' className='text-decoration-none text-uppercase'><Navbar.Brand>Learn With <span style={{ color: 'orangered' }} className='fw-semibold pe-lg-5'>nahin</span></Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className=" me-auto">
                            <Nav.Link><NavLink
                                to='/home'
                                style={({ isActive }) =>
                                    isActive ? activeStyle : inActiveStyle
                                }> <FaHome className='mx-3'></FaHome></NavLink></Nav.Link>
                            <Nav.Link><NavLink
                                to='/courses'
                                style={({ isActive }) =>
                                    isActive ? activeStyle : inActiveStyle
                                }> <FaBookReader className='mx-3'></FaBookReader></NavLink></Nav.Link>
                            <Nav.Link><NavLink
                                to='/blogs'
                                style={({ isActive }) =>
                                    isActive ? activeStyle : inActiveStyle
                                }> <FaBlog className='mx-3'></FaBlog></NavLink></Nav.Link>
                            <Nav.Link><NavLink
                                to='/faq'
                                style={({ isActive }) =>
                                    isActive ? activeStyle : inActiveStyle
                                }><FaQuestionCircle className='mx-3'></FaQuestionCircle></NavLink></Nav.Link>
                            <Nav.Link><NavLink
                                to='/contact'
                                style={({ isActive }) =>
                                    isActive ? activeStyle : inActiveStyle
                                }><FaAddressCard className='mx-3'></FaAddressCard></NavLink></Nav.Link>
                            <Nav.Link><NavLink
                                to='/login'
                                style={({ isActive }) =>
                                    isActive ? activeStyle : inActiveStyle
                                }> <FaSignInAlt className='mx-3'></FaSignInAlt></NavLink></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end align-item-center gap-3">
                        <p className='text-warning mt-3'>Dark || Light</p>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div>
    );
};

export default Header;