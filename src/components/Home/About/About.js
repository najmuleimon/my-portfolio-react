import React from 'react';
import about from '../../../assets/images/about.jpg';
import './About.css';

const About = () => {
    return (
        <section className="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div data-tilt className="about-img js-tilt">
                            <img src={about} className="img-fluid" alt="" />
                            <span className="about-border"></span>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-12">
                        <div className="about-content">
                            <div className="title">
                                <span>about me</span>
                            </div>
                            <div className="content">
                                <h3>Your can't use up creativity. The more you use,<br /> the more you have use significant
                                    mind.</h3>
                                <p>Professional frontend developer with 1.6+ years of experience building responsive
                                    websites and all aspects
                                    of the user experience and user interface for different websites using HTML5, CSS3,
                                    Javascript, jquery.
                                    Proficient in using React Js, SCSS, bootstrap, tailwind CSS.</p>
                            </div>
                            <div className="counter">
                                <ul>
                                    <li>Project Done</li>
                                    <li><span className="brand-cl count-item">20</span> <span className="brand-cl">+</span></li>
                                </ul>
                                <ul>
                                    <li>Years Of exprince</li>
                                    <li><span className="brand-cl count-item">1.6</span><span
                                        className="brand-cl">+ Years</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;