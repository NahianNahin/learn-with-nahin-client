import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

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
        <div>
            <Navbar className='mb-3' bg="dark" expand="lg" variant='dark'>
                <Container>
                    <Link to='/home' className='text-decoration-none'><Navbar.Brand>Learn With Nahin</Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className=" me-auto">
                            <Nav.Link><NavLink
                                to='/home'
                                style={({ isActive }) =>
                                    isActive ? activeStyle : inActiveStyle
                                }> Home</NavLink></Nav.Link>
                            <Nav.Link><NavLink
                                to='/courses'
                                style={({ isActive }) =>
                                    isActive ? activeStyle : inActiveStyle
                                }> Courses</NavLink></Nav.Link>
                            <Nav.Link><NavLink
                                to='/blogs'
                                style={({ isActive }) =>
                                    isActive ? activeStyle : inActiveStyle
                                }> Blog</NavLink></Nav.Link>
                            <Nav.Link><NavLink
                                to='/faq'
                                style={({ isActive }) =>
                                    isActive ? activeStyle : inActiveStyle
                                }> FAQ</NavLink></Nav.Link>
                            <Nav.Link><NavLink
                                to='/contact'
                                style={({ isActive }) =>
                                    isActive ? activeStyle : inActiveStyle
                                }> Contact</NavLink></Nav.Link>
                            <Nav.Link><NavLink
                                to='/login'
                                style={({ isActive }) =>
                                    isActive ? activeStyle : inActiveStyle
                                }> Login</NavLink></Nav.Link>



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