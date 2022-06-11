import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <Navbar expand="lg">
                            <Navbar.Brand href="#home">
                                <img src={logo} className="img-fluid" alt="" />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ms-auto">
                                    <NavLink to="/" className={({ isActive }) => (isActive ? "active-link nav-link" : "nav-link")}>Home</NavLink>
                                    <NavLink to="/about" className={({ isActive }) => (isActive ? "active-link nav-link" : "nav-link")}>About</NavLink>
                                    <NavLink to="/service" className={({ isActive }) => (isActive ? "active-link nav-link" : "nav-link")}>Service</NavLink>
                                    <NavLink to="/portfolio" className={({ isActive }) => (isActive ? "active-link nav-link" : "nav-link")}>Portfolio</NavLink>
                                    <NavLink to="/skills" className={({ isActive }) => (isActive ? "active-link nav-link" : "nav-link")}>Skills</NavLink>
                                    <NavLink to="/contact" className={({ isActive }) => (isActive ? "active-link nav-link" : "nav-link")}>Contact</NavLink>
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