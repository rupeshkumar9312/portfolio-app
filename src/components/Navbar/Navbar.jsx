import React from 'react'
import './navbar.scss'

import { FaBookOpen, FaDownload, FaFileDownload, FaGraduationCap, FaHome, FaPhone, FaUser } from 'react-icons/fa';
import { GiSkills } from 'react-icons/gi';

import NavItem from './NavItem';
import { Link } from 'react-router-dom';
import './navitem.scss'
import Button from '../UI/Button';

function Navbar(props) {
  return (
    <div className='navbar'>
      <Link className='item' to={'/home'}><NavItem><FaHome></FaHome></NavItem></Link>
      <Link className='item' to={'/about'}> <NavItem ><FaUser /></NavItem></Link>
      <Link className='item' to={'/skills'}><NavItem ><GiSkills></GiSkills></NavItem></Link>
      <Link className='item' to={'/education'}> <NavItem ><FaGraduationCap /></NavItem></Link>
      <Link className='item' to={'/experience'}><NavItem ><FaBookOpen></FaBookOpen></NavItem></Link>
      <Link className='item' to={'/contact'}> <NavItem ><FaPhone /></NavItem></Link>
      <div className='btn-hire_me'>
        <Button>Hire Me <FaFileDownload></FaFileDownload></Button>
      </div>
    </div>
  )
}

export default Navbar