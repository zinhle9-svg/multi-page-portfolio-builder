

function Projectinfo() {
  const projectData = [
    {
      name: 'Fire assay',
      startDate: '2025-01-01',
      endDate: '2025-06-01',
    },
    {
      name: 'Building an iphone',
      startDate: '2024-09-15',
      endDate: '2025-01-15',
    },
  ];

  return (
    <div className="p-6">
      {projectData.map((project, index) => (
        <div
          key={index}
          className="flex space-x-4 mb-4 p-4 bg-gray-100 rounded shadow"
        >
          <p className="text-xl font-semibold">Project Name:</p>
          <p className="text-xl">{project.name}</p>
          <p className="text-xl font-semibold">Start Date:</p>
          <p className="text-xl">{project.startDate}</p>
          <p className="text-xl font-semibold">End Date:</p>
          <p className="text-xl">{project.endDate}</p>
          
        </div>
      ))}
    </div>
  );
}

export default Projectinfo;
