import React from 'react'
import { FaDownload, FaHome } from 'react-icons/fa'
import Container from '../../container/Container'
import ImageCard from '../../container/ImageCard'
import Button from '../UI/Button'
import './home.scss'
import { easeIn, motion } from 'framer-motion'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import api from '../../api/api';
function Home() {
  const [home, setHome] = useState('')

  useEffect(() => {
    axios.get(api.home)
      .then(res => {
        setHome(res.data)
      })
  })

  return (
    <div>
      <Container>
        <motion.div className='child-container'

        >
          <p>
            <h1>{home.greetings} 👋 I'm</h1>
            <h1 className='text-name'>{home.name}</h1>
            <p className='designation'>{home.designation}</p>
            <Button>Get Resume <FaDownload></FaDownload></Button>
          </p>

        </motion.div>
        <ImageCard></ImageCard>

      </Container>
    </div>
  )
}

export default Home