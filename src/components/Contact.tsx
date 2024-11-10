import React from 'react'

import { AiOutlineMail } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";
import'../app/styles/contact.css'

const Contact = () => {
  return (
    <div id='contact' className='contact-container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='contact-space'>
                <h2 className='contact-heading' data-aos="zoom-in-up">Get in touch</h2>
                <p className='contact-text'data-aos="zoom-in-up">
                    Drop me a line,give me a call,or send me a message bysumitting the form.
                </p>
                <div className='contact-flex' data-aos="zoom-in-up">
                <AiOutlineMail size={30}/>ha7037047@gmail.com
                </div>
                <div className='contact-flex'data-aos="zoom-in-up">
                <BsTelephoneFill  size={30}/>03102829822
                </div>
            </div>
            <div className='contact-space'>
                <div className='form'data-aos="zoom-in-up">
                    <label htmlFor="name">Name</label>
                    <input type="text" 
                    className='h-[40px] bg-transparent border border-accent'
                    id='name' />
                </ div>
                <div className='form'data-aos="zoom-in-up">
                    <label htmlFor="email">Email</label>
                    <input type="text" 
                    className='h-[40px] bg-transparent border border-accent'
                    id='email' />
                </div>
                <div className='form'data-aos="zoom-in-up">
                    <label htmlFor="message">Message</label>
                    <textarea className='textarea-field'
                    id='msg'rows={8}>

                    </textarea>
                </div>
                <div>
                    <button className='button' data-aos="zoom-in-up">Send</button>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Contact;
