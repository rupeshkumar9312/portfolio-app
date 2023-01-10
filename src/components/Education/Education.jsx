import React from 'react'
import '../Education/education.scss'
import {FaGraduationCap} from 'react-icons/fa'
function Education() {

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
      Education Component
    </div>
  )
}

export default Education