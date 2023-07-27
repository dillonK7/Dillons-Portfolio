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
          <p>A dedicated individual with a passion of learning new skills. Including React!</p>
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
                <li>Agile project management, program management, SCRUM, and Software Development Life
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
          </li>
          <li className='item'>
            <h2>Programming Skills</h2>
            <span>
              ReactJS, .NET, C#, Python, HTML, CSS, MS SQL, AWS EC2, RedHat Linux
            </span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home