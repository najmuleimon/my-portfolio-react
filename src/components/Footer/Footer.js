import React from 'react';
import './Footer.css';
import logo from '../../assets/images/logo.png';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer>
            {/*  address section start  */}
            <section className="address">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 text-center">
                            <div className="a-img">
                                <img src={logo} className="img-fluid" alt="" />
                            </div>
                            <div className="a-text">
                                <p>If you think I am a Best fit for your organization, you can contact me via my social
                                    links given below or you can email me.</p>
                            </div>
                            <div className="row email">
                                <ul>
                                    <li><p>email : najmul.eimon@gmail.com</p></li>
                                    <li><p>phone : 01623257935</p></li>
                                </ul>
                            </div>
                            <div className="social">
                                <ul className='s-icon'>
                                    <li><a href="https://www.linkedin.com/in/md-najmul-huda-eimon/" target="_blank" rel="noreferrer"><FaLinkedinIn className='social-icons' /></a></li>
                                    <li><a href="https://github.com/najmuleimon" target="_blank" rel="noreferrer"><FaGithub className='social-icons' /></a></li>
                                    <li><a href="https://www.facebook.com/sheikhnajmul123/" target="_blank" rel="noreferrer"><FaFacebookF className='social-icons' /></a></li>
                                    <li><a href="https://www.instagram.com/sheikhnajmulhd/" target="_blank" rel="noreferrer"><FaInstagram className='social-icons' /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*  copyright section start  */}
            <section className="copy">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <p>Najmul &copy; All Rights Reserved, {year}</p>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    );
};

export default Footer;