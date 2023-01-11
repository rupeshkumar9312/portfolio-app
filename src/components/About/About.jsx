import React from 'react'
import '../About/about.scss'
import { FaUserAlt } from 'react-icons/fa'
import Container from '../../container/Container'
import Description from './Description'
import Button from '../UI/Button'
import Tab from './Tab'
import ImageCard from '../../container/ImageCard'
import Education from '../Education/Education'

function About() {

  // this will be populated from api

  const educationHistory = [
    {
      id: 1,
      from: "2009",
      to: "2010",
      title: "Secondary School",
      name: "Jawahar Navodaya Vidyalaya, Agra",
      description: "Did class 10th from here"

    },
    {
      id: 2,
      from: "2011",
      to: "2012",
      title: "Senior Secondary School",
      name: "Jawahar Navodaya Vidyalaya, Agra",
      description: "Did class 12th from here"

    }
  ]
  return (
    <div className='about'>
      <Container className='container-60vh'>
        <div className='child-container-01'>

          <img src="https://htmldemo.net/lendex/lendex/assets/images/portrait/portrait-hero.png" alt="" srcset="" />

        </div>
        <div className='child-container-02'>
          <Description></Description>
        </div>

      </Container>

      {/* <Container className="tabs-container">
        <Tab className="tab-left">Education</Tab>
        <Tab className="tab-right">Experience</Tab>
      </Container>
      <div className='education-list'>
        <Education data={educationHistory}/>
      </div> */}


    </div>
  )
}

export default About