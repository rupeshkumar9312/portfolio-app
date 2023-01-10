import React from 'react'
import { FaDownload } from 'react-icons/fa'
import './button.scss'
function Button(props) {
  return (
    <button className='button'>
        <h3>{props.children} <FaDownload></FaDownload></h3>
    </button>
  )
}

export default Button