import React, { useContext, useState } from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { FaAddressCard, FaBlog, FaBookReader, FaHome, FaMoon, FaQuestionCircle, FaSignInAlt, FaSignOutAlt, FaSun, FaUserCircle } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../Assets/logo.png';
import { AuthContext } from '../../contexts/AuthProvider';
import './Header.css';

const Header = () => {
    // AuthProvider
    const { logout, user } = useContext(AuthContext);
    // Toogle Dark Mode
    const [active, setActive] = useState(false);
    const handleToogleTrue = () => {
        setActive(true);
    }
    const handleToogleFalse = () => {
        setActive(false);
    }
    let activeStyle = {
        textDecoration: "underline",
        color: "#ffc107",
        fontWeight: "700",
        fontSize: '20px'
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
                    <Link to='/' className='text-decoration-none text-uppercase'><Navbar.Brand>Learn With <span style={{ color: 'orangered' }} className='fw-semibold pe-lg-5'>nahin</span></Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        {/* All Nav link  */}
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

                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end align-item-center gap-3">
                        {
                            // displaying Image & Name 
                            user?.uid ?
                                <>
                                    {
                                        user?.photoURL
                                            ?
                                            <abbr title={user?.displayName} className='p-2 f-4'>
                                                <Image
                                                    src={user?.photoURL}
                                                    style={{ height: '40px' }}
                                                    roundedCircle>
                                                </Image>
                                            </abbr>
                                            :
                                            <abbr title={user?.displayName}>
                                                <FaUserCircle className='text-warning fs-2'></FaUserCircle>
                                            </abbr>
                                    }
                                    <Navbar.Text className='text-light displayemail'>
                                        {user?.email}
                                    </Navbar.Text>
                                    <button onClick={logout} className='btn text-light'><FaSignOutAlt className='signout'></FaSignOutAlt></button>
                                </>

                                :
                                <>
                                    <Nav.Link><NavLink
                                        to='/login'
                                        style={({ isActive }) =>
                                            isActive ? activeStyle : inActiveStyle
                                        }> <FaSignInAlt className='mx-3'></FaSignInAlt></NavLink></Nav.Link>

                                </>
                        }
                        {/* Toggle Dark & Light Mode  */}
                        {
                            active
                                ?
                                <button onClick={handleToogleFalse} className='btn'><FaMoon className='text-danger fs-4'></FaMoon></button>
                                :
                                <button onClick={handleToogleTrue} className='btn'><FaSun className='text-warning fs-4'></FaSun></button>
                        }




                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div>
    );
};

export default Header;