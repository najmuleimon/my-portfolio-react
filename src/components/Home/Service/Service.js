import React from 'react';
import { FaLaptopCode } from 'react-icons/fa';
import { GrReactjs } from 'react-icons/gr';
import { FiCodepen } from 'react-icons/fi';
import { CgWebsite } from 'react-icons/cg';
import { MdOutlineDesignServices } from 'react-icons/md';
import { GoFileCode } from 'react-icons/go';
import './Service.css';

const Service = () => {
    return (
        <section className="service" >
            <div className="container text-center">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title">
                            <span>service</span>
                            <h2>my provided features</h2>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                        <div className="service-item">
                            <div className="service-icon">
                                <GrReactjs className='icons' />
                                <h4>Frontend development</h4>
                            </div>
                            <div className="service-text">
                                <GrReactjs className='icons' />
                                <h4>Frontend development</h4>
                                <p>Frontend web development with modern javascript library React js, Javascript, Firebase,
                                    React hook from etc.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                        <div className="service-item">
                            <div className="service-icon">
                                <MdOutlineDesignServices className='icons' />
                                <h4>web design</h4>
                            </div>
                            <div className="service-text">
                                <MdOutlineDesignServices className='icons' />
                                <h4>web design</h4>
                                <p>Website frontend design with all types of device compatibility, responsiveness,
                                    professional coding structure.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                        <div className="service-item">
                            <div className="service-icon">
                                <FaLaptopCode className='icons' />
                                <h4>web development</h4>
                            </div>
                            <div className="service-text">
                                <FaLaptopCode className='icons' />
                                <h4>web development</h4>
                                <p>Complete website development with both frontend and backend part with modern UI and
                                    excellent performance.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                        <div className="service-item">
                            <div className="service-icon">
                                <CgWebsite className='icons' />
                                <h4>Website Template</h4>
                            </div>
                            <div className="service-text">
                                <CgWebsite className='icons' />
                                <h4>Website Template</h4>
                                <p>Build modern, user friendly, dynamic, responsive Website template with excellent
                                    professional way.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                        <div className="service-item">
                            <div className="service-icon">
                                <FiCodepen className='icons' />
                                <h4>Backend CRUD Operation</h4>
                            </div>
                            <div className="service-text">
                                <FiCodepen className='icons' />
                                <h4>Backend CRUD Operation</h4>
                                <p>Website backend CRUD operation development with Node.js, Express.js, Mongo Db, Firebase.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                        <div className="service-item">
                            <div className="service-icon">
                                <GoFileCode className='icons' />
                                <h4>Backend Development</h4>
                            </div>
                            <div className="service-text">
                                <GoFileCode className='icons' />
                                <h4>Backend Development</h4>
                                <p>Website backend development with Node.js, Express.js, Mongo Db, Firebase etc with
                                    professional coding structure.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Service;