import React from 'react'
import './card.css'
function Card(props) {

    const classes = 'card ' + props.className;
  return (

    <div className={classes}>
        <h2>{props.title}</h2>
        <p>{props.value}</p>
    </div>
  )
}

export default Card