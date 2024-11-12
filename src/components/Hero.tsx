import React from 'react'
import Navbar from './Navbar'
import'../app/styles/hero.css'

const Hero = () => {
  return (
  <div id='hero' className="hero-container">

        <Navbar />
        <div className='hero-content'>

            <div className='hidden lg:block'></div>
            <div className='hero-text'>
                <div className='hero-msin'>
                    <p data-aos="fade-right">I'm</p>
                    <p data-aos="fade-right">Haris</p>
                    <p data-aos="fade-right">Arif</p>
                </div>
                </div>

        </div>
       
      
    </div>
  )
}

export default Hero;
