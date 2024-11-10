import React from 'react'
import Heading from './Heading'
import Card from './Card'
import '../app/styles/project.css'

const data = [
    {
        id :1,
        title:"Static Interactive Resume",
        desc:"A Typescript-based interactive resume built with HTML and CSS,allowing users to showcase their skills dynamically",
        img:"/project image.png",
        tags:["HTML, Node, CSS, Typescript"],

    }
]

const Projects = () => {
  return (
    <div  id='projects'  className='project-container'data-aos="zoom-in-up">
        <Heading  title="My Projects" />
        <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
            {data.map((el)=>(<Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
            />))}
        </div>
      
    </div>
  )
}

export default Projects;
