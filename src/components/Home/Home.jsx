import React from 'react'
import { FaHome } from 'react-icons/fa'
import Container from '../../container/Container'
import ImageCard from '../../container/ImageCard'
import Button from '../UI/Button'
import './home.scss'
import {easeIn, motion} from 'framer-motion'
function Home() {
  return (
    <div>
      <Container>
        <motion.div className='child-container'
        animate={{ x: 100 }}
        transition={{ ease : easeIn }}
      >
          <p>
            <h1>Hello 👋 I'm</h1>
            <h1 className='text-name'>Rupesh Kumar</h1>
            <p className='designation'>Software Developer</p>
            <Button>Get Resume</Button>
          </p>
          
        </motion.div>
        <ImageCard></ImageCard>

      </Container>
    </div>
  )
}

export default Home