import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import './Skills.css';

const Skills = () => {
    return (
        <section className="skill">
            <div className="container text-center">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title">
                            <span>skills</span>
                            <h2>my skills</h2>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="skillbar">
                                    <h3>web development</h3>
                                    <div className="circle">
                                        <div className="chart">
                                            <CircularProgressbar value={75} />
                                            <div className="value">
                                                <span className="count-item">75</span>
                                                <span className="percent">%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row time">
                                        <ul>
                                            <li><h4>React Js</h4></li>
                                            <li><h4>Firebase</h4></li>
                                            <li><h4>Node.js</h4></li>
                                            <li><h4>Mongo Db</h4></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="skillbar">
                                    <h3>frontend development</h3>
                                    <div className="circle">
                                        <div className="chart">
                                            <CircularProgressbar value={75} />
                                            <div className="value">
                                                <span className="count-item">70</span>
                                                <span className="percent">%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row time">
                                        <ul>
                                            <li><h4>HTML5, CSS3</h4></li>
                                            <li><h4>Tailwind CSS</h4></li>
                                            <li><h4>Bootstrap</h4></li>
                                            <li><h4>Jquery</h4></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="skillbar">
                                    <h3>react js</h3>
                                    <div className="circle">
                                        <div className="chart">
                                            <CircularProgressbar value={75} />
                                            <div className="value">
                                                <span className="count-item">75</span>
                                                <span className="percent">%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="time">
                                        <ul>
                                            <li><h4>React Bootstrap</h4></li>
                                            <li><h4>React Firebase</h4></li>
                                            <li><h4>React Query</h4></li>
                                            <li><h4>React Hook Form</h4></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Skills;