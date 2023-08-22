import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import "../styles/Footer.css"
import { Email } from '@material-ui/icons'

function Footer() {
  return (
    <div className='footer'>
    <div className='socialMedia'>
      
          <a href='https://www.linkedin.com/in/dillon-krein-168b58167/'>
          <LinkedInIcon />
          </a>
          <a href='mailto: dillonkrein@gmail.com'>
            <Email />
          </a>
          

    </div>
    <p>Please reach out via email with questions, comments, and areas for improvement!</p>
    </div>
  )
}

export default Footer