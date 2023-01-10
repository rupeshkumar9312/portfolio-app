import React from 'react'
import './container.scss'
import ImageCard from './ImageCard'

function Container(props) {
    const classes  = 'container ' + props.className;
    return (
        <div className={classes}>
            {props.children}
        </div>
    )
}

export default Container