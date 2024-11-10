import React from 'react'
import'../app/styles/navbar.css'


const Navbar = () => {
  return (
    <div className="navbar-container ">
      <div className="navbar">
        <div className="navbar-brand" data-aos="fade-right">Haris </div>
        <ul className="gap-10 lg:gap-16 hidden md:flex">

            <li className='navbar-link'><a href="#hero">Home</a></li>
            <li className='navbar-link'><a href="#about">About</a></li>
            <li className='navbar-link'><a href="#projects">Projects</a></li>
            <li className='navbar-link'><a href="#skills">Skills</a></li>
            <li className='navbar-link'><a href="#contact">Contact</a></li>
            
        </ul>
        
      </div>

    </div>
  )
}

export default Navbar;