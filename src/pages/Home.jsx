import projectpic from "../images/profile1.jpeg"
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-white bg-gradient-to-br from-gray-100 to-white text-gray-800">
      
      <section className="relative">
        <img 
          src={projectpic} 
          alt="Metallurgy Project" 
          className="w-full h-[60vh] object-cover brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
             Busisiwe Ngwane
            </h1>
            <Link to="/projects">
              <button className="mt-6 px-6 py-3 bg-pink-600 text-white text-lg rounded-md hover:bg-pink-700 transition duration-300 shadow-lg">
                Explore my Projects
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto py-12 px-6 text-center">
        {/* <h2 className="text-3xl font-bold mb-4">Who I am</h2> */}
        <p className="text-lg text-gray-600 leading-relaxed">
          I’m a passionate front-end developer with a solid foundation in HTML, CSS, JavaScript, 
          and modern frameworks, gained through hands-on school projects and self-driven learning.
        </p>
      </section>
    </div>
  );
}

export default Home;
