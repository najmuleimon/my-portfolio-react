import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import './Header.css';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <Navbar expand="lg">
                            <Navbar.Brand>
                                <Link to='/'>
                                    <img src={logo} className="img-fluid" alt="" />
                                </Link>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" >
                                <GiHamburgerMenu className='menu-icon' />
                            </Navbar.Toggle>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ms-auto">
                                    <NavLink to="/" className={({ isActive }) => (isActive ? "active-link nav-link" : "nav-link")}>Home</NavLink>
                                    <NavLink to="/about" className={({ isActive }) => (isActive ? "active-link nav-link" : "nav-link")}>About Me</NavLink>
                                    <NavLink to="/blog" className={({ isActive }) => (isActive ? "active-link nav-link" : "nav-link")}>Blogs</NavLink>
                                    <NavLink to="/projects" className={({ isActive }) => (isActive ? "active-link nav-link" : "nav-link")}>Portfolio</NavLink>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                </div>
            </div>
        </header>

    );
};

export default Header;