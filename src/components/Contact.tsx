import React from 'react'

import { AiOutlineMail } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'>
                <h2 className='text-5xl font-medium' >Get in touch</h2>
                <p className='text-gray-600 text-[18]'>
                    Drop me a line,give me a call,or send me a message bysumitting the form.
                </p>
                <div className='flex gap-3 items-center'>
                <AiOutlineMail size={30}/>ha7037047@gmail.com
                </div>
                <div className='flex gap-3 items-center'>
                <BsTelephoneFill  size={30}/>03102829822
                </div>
            </div>
            <div className='space-y-8'>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="name">Name</label>
                    <input type="text" 
                    className='h-[40px] bg-transparent border border-accent'
                    id='name' />
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="email">Email</label>
                    <input type="text" 
                    className='h-[40px] bg-transparent border border-accent'
                    id='email' />
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="message">Message</label>
                    <textarea className='bg-transparent border border-accent'
                    id='msg'rows={8}>

                    </textarea>
                </div>
                <div>
                    <button className='bg-accent p-2 px-6  bg-lime-600'>Send</button>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Contact
