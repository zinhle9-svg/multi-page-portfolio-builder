import Projectinfo from "../ProjectInfo";


function Projects({ name, startDate, endDate }) {
  return (
    <div className="flex space-x-4 mb-4 p-4 bg-gray-100 rounded shadow">
      <p className="text-xl font-semibold">Project Name:</p>
      <p className="text-xl">{name}</p>
      <p className="text-xl font-semibold">Start Date:</p>
      <p className="text-xl">{startDate}</p>
      <p className="text-xl font-semibold">End Date:</p>
      <p className="text-xl">{endDate}</p>
      <Projectinfo />
    </div>
  );
}

export default Projects;
