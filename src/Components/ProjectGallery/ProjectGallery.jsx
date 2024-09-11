// src/components/ProjectGallery.js
import React from 'react';

const ProjectGallery = () => {
  const projects = [
    { title: 'Proyecto 1', img: 'https://via.placeholder.com/150' },
    { title: 'Proyecto 2', img: 'https://via.placeholder.com/150' },
  ];

  return (
    <section id="projects">
      <h2>Galería de Proyectos</h2>
      <div>
        {projects.map((project, index) => (
          <div key={index}>
            <h3>{project.title}</h3>
            <img src={project.img} alt={project.title} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectGallery;
