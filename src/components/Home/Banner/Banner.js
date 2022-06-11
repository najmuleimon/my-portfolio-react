import React from 'react';
import './Banner.css';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';

const Banner = () => {
    return (
        <section className='banner'>
            <div className="banner-overlay">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 offset-xl-2 col-lg-12 col-md-12 text-center">
                            <h1>hi ! I am <span>Najmul</span></h1>
                            <span className="designation">Frontend Web developer</span>
                            <p>Professional frontend developer with 1.6+ years of experience building responsive websites and all aspects
                                of the user experience and user interface for different websites using HTML5, CSS3, Javascript, jquery.
                                Proficient in using React Js, SCSS, bootstrap, tailwind CSS.</p>
                            <ul className="button justify-content-center">
                                <li><a href="#!">hire me</a></li>
                                <li><a href="../../../assets/ResumeNajmulUpdate.pdf" download>download Resume</a></li>
                            </ul>

                            <div className="social-links">
                                <ul className='d-flex align-items-center justify-content-center'>
                                    <li><a href="https://www.linkedin.com/in/md-najmul-huda-eimon/" target="_blank" rel="noreferrer"><FaLinkedinIn className='social-icons' /></a></li>
                                    <li><a href="https://github.com/najmuleimon" target="_blank" rel="noreferrer"><FaGithub className='social-icons' /></a></li>
                                    <li><a href="https://www.facebook.com/sheikhnajmul123/" target="_blank" rel="noreferrer"><FaFacebookF className='social-icons' /></a></li>
                                    <li><a href="https://www.instagram.com/sheikhnajmulhd/" target="_blank" rel="noreferrer"><FaInstagram className='social-icons' /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;