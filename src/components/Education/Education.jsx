import React from 'react'
import '../Education/education.scss'
import { FaGraduationCap } from 'react-icons/fa'
import Duration from './Duration'
import Container from '../../container/Container'
function Education(props) {


  return (

    <div className='education-list'>
      {props.data.map((item) => {
        return <div className='education'>
          <Duration>{item.from} - {item.to}</Duration>
          <h1>{item.title}</h1>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
        </div>
      })}
    </div>

    // <div className='education'>

    //   <Duration>{props.data.from} - {props.data.to}</Duration>
    //   <h1>{props.data.title}</h1>
    //   <h2>{props.data.name}</h2>
    //   <p>{props.data.description}</p>
    // </div>
  )
}

export default Education