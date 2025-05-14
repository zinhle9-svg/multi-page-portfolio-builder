

import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';


function App() {
  return (
    <div className="min-h-screen bg-gray-100">
    <nav className="bg-pink-600">
<div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
      <div className="flex space-x-6">
      <Link className="text-white hover:text-gray-300 transition duration-300 font-medium" to='/'>Home</Link>

      </div>
     <div>
        <Link className="text-white hover:text-gray-300 transition duration-300 font-medium"to='/contact'>Contact</Link>
        </div>
        <div>
       <Link className="text-white hover:text-gray-300 transition duration-300 font-medium"to='/projects'>Projects</Link>
       </div>
   </div>
    </nav>
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/projects' element={<Projects/>}/>
</Routes>

</div>
)
};
  
export default App;
