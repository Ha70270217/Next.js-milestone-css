import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
        <div  className='grid md:grid-cols-2 gap-20 items-center'>
            <div>
                <h1 className='text-4xl md:text-5xl font-medium'>Technologies I work with</h1>
                <p className='text-gray-500 pt-2'>
                    I have a solid foundation in web development,specailizing in HTML,CSS and Javascript.My experience extend to usings frameworks like react and nextjs to create dynamic and userfriendly application.I'm also proficient in Tailwind.css for efficient styling and design.With a passion for learning, I stay updated on the latest tecnologies to enhance my skills set nd contribute effectively to projects.
                </p>
            </div>
            <div>
                <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl text-lime-500'>
                    <div className='space-y-2'>
                        <h2>Typescript</h2>
                        <h2>React.js</h2>
                        <h2>Next.js</h2>

                    </div>
                    <div className='space-y-2'>
                        <h2>Tailwind</h2>
                        <h2>CSS</h2>
                        <h2>Node.js</h2>

                    </div>
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default Skills
