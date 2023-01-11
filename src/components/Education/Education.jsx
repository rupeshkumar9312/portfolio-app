import React from 'react'
import '../Education/education.scss'
import {FaGraduationCap} from 'react-icons/fa'
import Duration from './Duration'
function Education(props) {

  const educationHistory = [
    {
      id:1,
      from:"2009",
      to:"2010",
      title:"Secondary School",
      name:"Jawahar Navodaya Vidyalaya, Agra",
      description:"Did class 10th from here"
      
    },
    {
      id:2,
      from:"2011",
      to:"2012",
      title:"Senior Secondary School",
      name:"Jawahar Navodaya Vidyalaya, Agra",
      description:"Did class 12th from here"
      
    }
  ]
  return (
    <div className='education'>
      <Duration></Duration>
      <h1>Bachelor of Technology , (CSE)</h1>
      <h2>Faculty of Engineering and Technology, Agra College, Agra</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been indus dard dummy text ever since the 1500 when an uniknown prnter took galley of type and scrambled make specimen book has not only five centuries the into electronic.</p>
    </div>
  )
}

export default Education