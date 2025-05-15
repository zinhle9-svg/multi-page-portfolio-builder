
import React from 'react';
import Projects from './pages/Projects';

function Projectinfo() {
  const projectData = [
    {
      name: 'AI Dashboard',
      startDate: '2025-01-01',
      endDate: '2025-06-01',
    },
    {
      name: 'Website Redesign',
      startDate: '2024-09-15',
      endDate: '2025-01-15',
    },
  ];

  return (
    <div className="p-6">
      {projectData.map((project, index) => (
        <Projects
          key={index}
          name={project.name}
          startDate={project.startDate}
          endDate={project.endDate}
        />
      ))}
    </div>
  );
}

export default Projectinfo;