import React from 'react'
import './duration.scss'

function Duration(props) {
  return (
    <div className='duration'>
        <div className='duration-text'>{props.children}</div>
    </div>
  )
}

export default Duration