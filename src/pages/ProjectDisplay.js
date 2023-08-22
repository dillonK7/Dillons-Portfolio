import React from 'react'
import { Navigate, useParams, useNavigate, Link } from 'react-router-dom'
import { projectList } from '../helpers/ProjectList';
import "../styles/ProjectDisplay.css"
import GitHubIcon from "@material-ui/icons/GitHub"

function ProjectDisplay() {
    const{ id } = useParams();
    const project = projectList[id];
    const navigate = useNavigate();
  return (
    <div className='project'  >
        <h1>{project.name}</h1>
        <img src={project.image}   />
        <p>Skills: {project.skills}</p>
        <a href='https://github.com/dillonK7/Lab1_Part3_DillonKrein/tree/master/Lab1_Part3_DillonKrein'>
        <GitHubIcon />
        </a>
        
        

    </div>
  )
}

export default ProjectDisplay