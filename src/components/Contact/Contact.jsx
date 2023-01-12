import React from 'react'
import { FaMailBulk, FaPhone, FaPhoneSquare, FaVoicemail } from 'react-icons/fa'
import Container from '../../container/Container'
import Tab from '../About/Tab'
import '../Contact/contact.scss'
import Button from '../UI/Button'
import Card from '../UI/Card'

function Contact() {
  return (
    <div className='contact'>
      <Container className='container-30vh'>
        <div className='text'>
          <h1 className='text-contact-me'><u> Contact Me </u></h1>
        </div>
      </Container>
      <div className='contact-details'>
        <Container className='container-width-30'>
          <Card className='card-margin-top card-margin-bottom' title="Phone :" value="+91-8532077953"></Card>
          <Card title="Email :" value="rupeshkumar9312@gmal.com"></Card>
          <Card className='card-margin-top card-margin-bottom' title="Website :" value="www.rupesh-kumar.in"></Card>
          
        </Container>
        <Container className='container-width-60'>
          <h2>If you have any project or need help. Contact me</h2>
          <div className='form-div'>
            <form className='form'>
              <div className='form-row'>
                <input className='right' type="text" placeholder='Name' name="" id="" />
                <input className='left' type="text" placeholder='Email' name="" id="" />
              </div>
              <div className='form-row'>
                <input className='right' type="text" placeholder='Phone' name="" id="" />
                <input className='left' type="text" placeholder='Subject' name="" id="" />
              </div>
              <div className='form-row-100'>
                <textarea type="text" placeholder='Comment' name="" id="" />
              </div>
              <Button>Submit <FaMailBulk></FaMailBulk>
              </Button>
              
            </form>
          </div>
        </Container>

      </div>


      <Container>

      </Container>


    </div>
  )
}

export default Contact