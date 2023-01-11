import React from 'react'
import './image-card.scss'
import {easeIn, motion} from 'framer-motion'

function ImageCard() {
  return (
    <motion.div className='image-card'
    >
        <img src="https://htmldemo.net/lendex/lendex/assets/images/portrait/portrait-hero.png" alt="" srcset="" />
    </motion.div>
  )
}

export default ImageCard