

import coding from "../images/Coding.png"

function Projects() {
const projectData = [
  {
    name: 'Resume building',
    startDate: '2025-02-17',
    endDate: '2025-02-26',
    description: 'HTML and CSS',
    link: 'https://gleaming-arithmetic-3ff43d.netlify.app/'
  },
  {
    name: 'Diamond Tech',
    startDate: '2025-02-24',
    endDate: '2025-02-28',
    description: 'HTML and CSS',
    link: 'https://grand-kelpie-18a210.netlify.app/'
  },
  {
    name: 'Fashionova',
    startDate: '2025-03-03',
    endDate: '2025-03-10',
    description: 'HTML and CSS',
    link: 'https://lively-gaufre-19d373.netlify.app/'
  },
    {
    name: 'Digital contact card',
    startDate: '2025-05-02',
    endDate: '2025-05-09',
    description: 'Javascript, REACT and CSS',
    link: 'https://digitalcontact.netlify.app/'
  },
];
  return (
    <div className="min-h-screen bg-white text-gray-800">
      
      <section className="bg-gradient-to-r from-pink-600 to-red-500 py-12 text-white text-center">
        <h1 className="text-5xl font-bold mb-4">My Projects</h1>
        <p className="text-lg max-w-2xl mx-auto">While I haven’t had the chance to work in the industry yet, I’ve built
           multiple functional and visually engaging applications that reflect real-world development practices.
        </p>
      </section>

    
      <section className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 duration-300"
          >
            <img
              src={coding}
              alt={project.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{project.name}</h2>
             <p className="text-sm text-gray-600 mb-2">
  <span className="font-medium">Start:</span> {project.startDate} &nbsp;|&nbsp;
  <span className="font-medium">End:</span> {project.endDate}
</p>
              <p className="text-gray-700 mb-4">{project.description}</p>
          <a href={project.link} className="text-blue-500 hover:underline">see project</a>
            
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Projects;