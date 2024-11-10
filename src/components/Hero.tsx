import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id='hero' className="min-h-screen	bg-no-repeat   bg-cover"
    >

        <Navbar />
        <div className='container grid lg:grid-cols-1 h-[calc(100vh-60px)]'>

            <div className='hidden lg:block'></div>
            <div className='text-[80px] sm:text-[100px] font-bold leading-tight pl-16'>
                <div>
                    <p data-aos="fade-right">I'm</p>
                    <p data-aos="fade-right">Haris</p>
                    <p data-aos="fade-right">Arif</p>
                </div>
                </div>

        </div>
       
      
    </div>
  )
}

export default Hero
