import projectimage from "../images/project1.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white text-gray-800">
      
      <section className="relative">
        <img 
          src={projectimage} 
          alt="Metallurgy Project" 
          className="w-full h-[60vh] object-cover brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
             South Africa's biggest smelter
            </h1>
            <p className="text-xl text-white mt-4 drop-shadow-sm max-w-2xl mx-auto">
              Discover the science and art of metals — their properties, transformations, and innovations.
            </p>
            <Link to="/projects">
              <button className="mt-6 px-6 py-3 bg-pink-600 text-white text-lg rounded-md hover:bg-pink-700 transition duration-300 shadow-lg">
                Explore Projects
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Who we are</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          At Metallurgy Lab, we’re passionate about advancing the frontiers of metal research and industrial innovation.
          From fire assay techniques to high-precision alloy development, we believe in combining tradition with modern engineering to deliver meaningful solutions.
        </p>
      </section>
    </div>
  );
}

export default Home;
