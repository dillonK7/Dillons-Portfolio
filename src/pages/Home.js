import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import EmailIcon from "@material-ui/icons/Email"
import  GitHubIcon  from '@material-ui/icons/GitHub'
import "../styles/Home.css"

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Welcome to Dillon's Portfolio</h2>
        <div className='prompt'>                   
          <p>Made with ReactJS. Feel free to look around!</p>          
          <a href='https://www.linkedin.com/in/dillon-krein-168b58167/'>
            <LinkedInIcon />
          </a>
          <a href='mailto: dillonkrein@gmail.com'>
            <EmailIcon />
          </a>
          <a href='https://github.com/dillonK7/Dillons-Portfolio/tree/main'>
            <GitHubIcon/>
          </a>
        </div>
      </div>
      <div className='skills'>        
        <ol className='list'>
          <li className='item'>
            <h2>Industry Skills</h2>
            <span>
              <ul>
                <li><b>Programming: </b>Self-taught ReactJS, C# and .NET, MS SQL Server, HTML5, CSS, Python, AWS EC2, Visual Studio Code, GitHub.</li>
                <br></br><li><b>Systems Analysis: </b>Requirements gathering, UAT administration, SQL procedures and joins, PowerBI analytics, Salesforce reporting, User stories, Bug tracking.</li>
                <br></br><li><b>Project Management: </b>SDLC methodologies, Agile project management, Project schedules/deliverables, Project Charters, Confluence, onshore/offshore teams, change management.</li>
                <br></br><li><b>Certifications: </b>Ability to achieve Security+ and Salesforce Administrator certifications within 90 days of hire. </li><br></br>                
              </ul>
            </span>
            <li className='item'>
              <h4><br></br>About this website</h4>
              <span>
                <ul>
                  <li>I developed this site as an ongoing effort to showcase self-taught ReactJS skills and proven 
                      ability to learn quickly. I am eager to contribute my adaptable skillset and drive for continuous improvement to a dynamic team. 
                      Currently seeking a programming role where I can leverage my existing knowledge while embracing new challenges and opportunities for growth.</li>
                  <li>This is my first iteration. More to come....</li>
                </ul>
              </span>
            </li>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home