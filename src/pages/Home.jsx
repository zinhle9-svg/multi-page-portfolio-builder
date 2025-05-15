import projectimage from "../images/project1.jpg";

function Home() {
  return (
    <div className="text-4xl font-bold">
      <div className="max-w-7xl mx-auto px-4 italic">
        Welcome to Metallurgy
        <img 
          src={projectimage} 
          alt="Project Preview" 
          className="w-full h-auto mt-4 rounded shadow-md"
        />
      </div>
    </div>
  );
}

export default Home;

