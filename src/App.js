import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';

import { BrowserRouter, Routes, Route ,Link} from 'react-router-dom'
import { FaBookOpen, FaGraduationCap, FaHome, FaPhone, FaUser } from 'react-icons/fa';
import { GiSkills } from 'react-icons/gi';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Education from './components/Education/Education';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>

      <Navbar></Navbar>
        <Routes>
          
          <Route path='home' element={<Home/>}></Route>
          <Route path='about' element={<About/>}></Route>
          <Route path='skills' element={<Skills/>}></Route>
          <Route path='education' element={<Education/>}></Route>
          <Route path='experience' element={<Experience/>}></Route>
          <Route path='contact' element={<Contact/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
