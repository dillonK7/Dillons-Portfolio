import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import EmailIcon from "@material-ui/icons/Email"
import "../styles/Home.css"

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Welcome to Dillon's Portfolio</h2>
        <div className='objective'>
          <p>Dedicated and self-motivated self-taught ReactJS user with a strong passion for coding and a proven 
            ability to learn quickly. <br></br> Eager to contribute my adaptable skillset and drive for continuous improvement to a dynamic team. 
            <br></br>Seeking a programming role where I can leverage my existing knowledge while embracing new challenges and opportunities for growth.</p>
          <a href='https://www.linkedin.com/in/dillon-krein-168b58167/'>
            <LinkedInIcon />
          </a>
          <a href='mailto: dillonkrein@gmail.com'>
            <EmailIcon />
          </a>
        </div>
      </div>

      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Industry Skills</h2>
            <span>
              <ul>
                <li>Ability to achieve Security+ and Salesforce Administrator certifications 
                  within 90 days of hire. </li>
                <li>Agile project management, program management, Scrum, and Software Development Life
                  Cycle.
                </li>
                <li>Familiarity with version control in GitHub and technical documentation in Confluence.</li>
                <li>Configuration of AWS EC2 instances.</li>
                <li>Application of parameterized queries and stored procedures in SQL.</li>
                <li>Administration of User Acceptance Testing (UAT).</li>
                <li>Working knowledge of Tableau, Power BI, and other data visualization techniques.</li>
                <li>Exposure to distributed resources and teams both onshore and offshore.</li>
              </ul>
            </span>

            <li className='item'>
              <h2>Programming Skills</h2>
              <span>
                <ul>
                  <li>ReactJS, .NET, C#, Python, HTML, CSS, MS SQL, AWS EC2, RedHat Linux</li>
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