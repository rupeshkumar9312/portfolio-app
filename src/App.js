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
  const educationHistory = [
    {
      id: 1,
      from: "2009",
      to: "2010",
      title: "Secondary School",
      name: "Jawahar Navodaya Vidyalaya, Agra",
      description: "orem Ipsum is simply dummy text of the printing and pesetting industry has been the industry's standard dummy text ever since the 1500s, when an unkn own printer took galley of type and scrambled orem Ipsum is simply dummy text of the printing and pesetting industry has been the industry's standard dummy text ever since the 1500s, when an unkn own printer took galley of type and scrambled"

    },
    {
      id: 2,
      from: "2011",
      to: "2012",
      title: "Senior Secondary School",
      name: "Jawahar Navodaya Vidyalaya, Agra",
      description: "orem Ipsum is simply dummy text of the printing and pesetting industry has been the industry's standard dummy text ever since the 1500s, when an unkn own printer took galley of type and scrambled orem Ipsum is simply dummy text of the printing and pesetting industry has been the industry's standard dummy text ever since the 1500s, when an unkn own printer took galley of type and scrambled"
    },
    {
      id: 3,
      from: "2012",
      to: "2016",
      title: "Bachelor of Technology, (CSE)",
      name: "Faculty of Engineering and Technology, Agra College, Agra",
      description: "orem Ipsum is simply dummy text of the printing and pesetting industry has been the industry's standard dummy text ever since the 1500s, when an unkn own printer took galley of type and scrambled orem Ipsum is simply dummy text of the printing and pesetting industry has been the industry's standard dummy text ever since the 1500s, when an unkn own printer took galley of type and scrambled"
    },
    {
      id: 4,
      from: "2018",
      to: "2019",
      title: "Post Graduate Diploma in Advanced Computing",
      name: "Centre for Development of Advanced Computing, Bengaluru",
      description: "orem Ipsum is simply dummy text of the printing and pesetting industry has been the industry's standard dummy text ever since the 1500s, when an unkn own printer took galley of type and scrambled orem Ipsum is simply dummy text of the printing and pesetting industry has been the industry's standard dummy text ever since the 1500s, when an unkn own printer took galley of type and scrambled"
    }
  ]
  return (
    
    <div className="App">
      
      <BrowserRouter>

      <Navbar></Navbar>
        <Routes>
        <Route path='/' element={<Home/>}></Route>
          <Route path='home' element={<Home/>}></Route>
          <Route path='about' element={<About/>}></Route>
          <Route path='skills' element={<Skills/>}></Route>
          <Route path='education' element={<Education data={educationHistory}/>}></Route>
          <Route path='experience' element={<Education data={educationHistory}/>}></Route>
          <Route path='contact' element={<Contact/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
