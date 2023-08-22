import React from 'react'
import ProjectItem from '../components/ProjectItem'
import Img1 from "../assets/img1.png"
import img2 from "../assets/img2.jpg"
import "../styles/Project.css"
import { projectList } from '../helpers/ProjectList'


function Projects() {
  return (
    <div className='projects'>
      <h1>My Personal Projects</h1>
      <div className='projectList'>
        {projectList.map((project, idx) => {
          return <ProjectItem id={idx} name={project.name} image={project.image} link={project.link}/>
        })}
      </div>
    </div>

  )
}

export default Projects