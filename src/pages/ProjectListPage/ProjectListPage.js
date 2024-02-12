// ProjectsPage.js
import React from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard'; 
import './ProjectListPage.css'; // Import the ProjectCard CSS

const ProjectsPage = ({ projectData, dark }) => {

  return (
    <>
      <h1 className={`project_title ${dark? 'dark': ''}`}>Projects</h1>
      <div className="projects-page">
        {projectData.map((project) => (
          <ProjectCard key={project.title} project={project} dark={dark}/>
        ))}
      </div>
    </>
  );
};

export default ProjectsPage;
