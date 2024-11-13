import React from 'react'
import   '../app/styles/skills.css'
const Skills = () => {
  return (
    <div id='skills' className='skills-container'>
        <div  className='skills-grid'>
            <div className='skills-left'data-aos="zoom-in-up">
                <h1 className='skills-heading' >Technologies I work with</h1>
                <p  className='skills-text'  >
                    I have a solid foundation in web development,specailizing in HTML,CSS and Javascript.My experience extend to usings frameworks like react and nextjs to create dynamic and userfriendly application.I m also proficient in Tailwind.css for efficient styling and design.With a passion for learning, I stay updated on the latest tecnologies to enhance my skills set nd contribute effectively to projects.
                </p>
            </div>



            <div className='skills-right'>
                <div className='skills-icons-grid'>
                    <div className='skills-space'>
                        <h2 data-aos="zoom-in-up">Typescript</h2>
                        <h2 data-aos="zoom-in-up">React.js</h2>
                        <h2 data-aos="zoom-in-up">Next.js</h2>

            </div>
                    <div className='skills-space'>
                        <h2 data-aos="zoom-in-up">Tailwind</h2>
                        <h2 data-aos="zoom-in-up">CSS</h2>
                        <h2 data-aos="zoom-in-up">Node.js</h2>

                    </div>
                </div>
              </div>
            </div>
        </div>
      
    
  )
}

export default Skills;
