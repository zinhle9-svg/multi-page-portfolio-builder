
import projectpic from "../images/project2.jpg"

function Projects() {
const projectData = [
  {
    name: 'Fire Assay Analysis',
    startDate: '2025-01-01',
    endDate: '2025-06-01',
    description: 'A classical method for precious metal analysis using high-temperature furnaces and fluxes.',
  },
  {
    name: 'iPhone Component Alloy',
    startDate: '2024-09-15',
    endDate: '2025-01-15',
    description: 'Developing custom alloys for mobile hardware, ensuring both durability and conductivity.',
  },
  {
    name: 'Recycling Rare Earth Metals',
    startDate: '2025-03-01',
    endDate: '2025-10-01',
    description: 'Exploring sustainable metallurgy techniques to extract and reuse rare earth metals from e-waste.',
  },
];
  return (
    <div className="min-h-screen bg-white text-gray-800">
      
      <section className="bg-gradient-to-r from-pink-600 to-red-500 py-12 text-white text-center">
        <h1 className="text-5xl font-bold mb-4">Our Projects</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Dive into our ongoing and completed projects that advance metallurgical science through cutting-edge research, innovation, and industrial application.
        </p>
      </section>

    
      <section className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 duration-300"
          >
            <img
              src={projectpic}
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
            
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Projects;