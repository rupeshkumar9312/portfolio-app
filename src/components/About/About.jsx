import React from 'react'
import '../About/about.scss'
import {FaUserAlt} from 'react-icons/fa'
import Container from '../../container/Container'
import Description from './Description'
import Button from '../UI/Button'
import Tab from './Tab'
import ImageCard from '../../container/ImageCard'

function About() {
  return (
    <div className='about'>
      <Container>
        <div className='child-container-01'>
          
        <img src="https://htmldemo.net/lendex/lendex/assets/images/portrait/portrait-hero.png" alt="" srcset="" />
    
       </div>
        <div className='child-container-02'>
          <Description></Description>
        </div>

      </Container>
      
      <Container className="tabs-container">
        <Tab className="tab-left">Education</Tab>
        <Tab className="tab-right">Experience</Tab>
      </Container>
    </div>
  )
}

export default About