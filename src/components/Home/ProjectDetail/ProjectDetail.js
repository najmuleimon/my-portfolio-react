import React from 'react';
import { useParams } from 'react-router-dom';
import useProjects from '../../../hooks/useProjects';

const ProjectDetail = () => {
    const { id } = useParams();
    const [projects] = useProjects();
    const pro = projects.find(project => project.id === id);
    console.log(pro);
    return (
        <div>

        </div>
    );
};

export default ProjectDetail;