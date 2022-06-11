import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProjects from '../../../hooks/useProjects';

const AllProjects = () => {
    const [projects] = useProjects();
    const navigate = useNavigate();

    const projectDetail = id => {
        navigate(`/project/${id}`)
    }
    return (
        <section className="portfolio">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="title">
                            <span>portfolio</span>
                            <h2>creative works</h2>
                        </div>
                    </div>
                    <div className="col-lg-12 main_img">
                        <div className="row">
                            {
                                projects.map(project => <div key={project.id} className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="p-item">
                                        <div className="p-image">
                                            <img src={project.images[0]} className="img-fluid" alt="" />
                                            <div className="p-overlay">
                                                <button onClick={() => projectDetail(project.id)}>View Details</button>
                                                <div className="p-text">
                                                    <p>{project.name}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AllProjects;