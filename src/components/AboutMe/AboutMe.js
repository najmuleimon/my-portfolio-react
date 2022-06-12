import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <section className='about about-me'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title text-center">
                            <span>About Me</span>
                            <h2>About Me</h2>
                        </div>
                    </div>
                    <div className="col-lg-12">

                        <div className="card">
                            <h3><span>Name:</span> Md. Najmul Huda Eimon</h3>
                            <h3><span>Email address:</span> najmul.eimon@gmail.com</h3>
                        </div>
                        <div className="card">
                            <h4>Profile:</h4>
                            <p>Professional frontend developer with 1.6+ years of experience building responsive websites and all aspects
                                of the user experience and user interface for different websites using HTML5, CSS3, Javascript, jquery.
                                Proficient in using React Js, SCSS, bootstrap, tailwind CSS</p>
                        </div>
                        <div className="card">
                            <h4>Education:</h4>
                            <ul>
                                <li>Bachelor of Science: BSc in CSE (2019)</li>
                                <li>Higher Secondary Certificate: Shaheed Ramiz Uddid Cantonment College (2014)</li>
                                <li>Secondary School Certificate: Banani Bidyaniketan (2012)</li>
                            </ul>
                        </div>
                        <div className="card">
                            <h4>Skills:</h4>
                            <ul>
                                <li>Expertise: HTML5, CSS3, SCSS, Bootstrap, Tailwind CSS, Javascript, ES6, Reactjs (React Firebase
                                    Hooks, React Hook Forms, React Stripe, React Query, Axios, React chats)</li>
                                <li>Comfortable: Node.js, Express.js, Mongo Db, Firebase, Jquery</li>
                                <li>Familiar: Netlify, Heroku</li>
                                <li>Tools: VS Code, GitHub, Chrome Dev Tools, ClickUp, Figma, Adobe Photoshop, Adobe XD</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;