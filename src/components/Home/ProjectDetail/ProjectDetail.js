import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetail.css';

const ProjectDetail = () => {
    const { project_id } = useParams();
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => setProjects(data));
    }, [project_id])
    const selectedProject = projects.find(project => project.id === project_id);
    return (
        <section className='project-detail'>
            <div className="container">
                <div className="p-item">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                <h2>{selectedProject?.name}</h2>
                                {
                                    selectedProject?.images.map((img, index) => <div key={index} className="col-lg-4 col-md-6">
                                        <div className="p-image">
                                            <img src={img} alt="" />
                                        </div>
                                    </div>).slice(0, 3)
                                }
                            </div>
                        </div>
                        <div className="col-lg-12">

                            <ul className="p-desc">
                                {
                                    selectedProject?.details.map((detail, index) => <li key={index}>{detail}</li>)
                                }
                            </ul>
                            <ul className="buttons">
                                <li>
                                    <a href={selectedProject?.live}>Live Preview</a>
                                </li>
                                <li>
                                    <a href={selectedProject?.client}>Github
                                        (Client Side)</a>
                                </li>
                                {
                                    selectedProject?.server && <li>
                                        <a href={selectedProject?.server}>Github
                                            (Server Site)</a>
                                    </li>
                                }

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectDetail;