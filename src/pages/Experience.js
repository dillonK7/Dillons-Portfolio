import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className='experience'>      
      <VerticalTimeline lineColor="#3e497a">
        
      <VerticalTimelineElement 
          className="vertical-timeline-element--work" 
          // date='June 2022 - July 2023'
          iconStyle={{background: "orange", color:"#fff"}}
          icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Project Coordinator, Enterprise Applications - ScienceLogic
          </h3>
          <h4>Remote, <i>June 2022 - July 2023</i></h4>
          <p><ul>
            <li>Guided the merging of acquired company data into the enterprise software as part of a company
              consolidation effort, ensuring seamless integration of billing servers, customer product keys and
              Salesforce data.</li>
            <li>Coordinated the installation of third-party platforms into the company’s Salesforce instance,
              managing deliverables of multiple departments and ensuring adherence to project timelines.</li>
            <li>Administered User Acceptance Testing (UAT) for the new integrations, setting schedules,
              coordinating testing efforts, and facilitating communication between developers, testers, and
              designers.</li>
            <li>Set schedules for testing and user acceptance, reported, and tracked identified bugs, and
              facilitated resolution and feedback loop between development and testing teams. </li>
            
          </ul></p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className="vertical-timeline-element--work" 
          // date='Summers 2018,2019'
          iconStyle={{background: "orange", color:"#fff"}}
          icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Summer Intern - Three Sigma Software
          </h3>
          <h4>Lorton, Virigina, <i>Summers 2028, 2019</i></h4>
          <p><ul>
            <li> Managed the company database to access client records for all Michigan residents. </li>
            <li>Handled daily inbound calls while providing account support and addressing program issues.</li>
            <li>Passed state background check every year to continue intern position. </li>
            </ul> </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className="vertical-timeline-element--education" 
          // date='2018-2022'
          iconStyle={{background: "blue", color:"#fff"}}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            James Madison University, Harrisonburg, Virginia
          </h3>
          <p>Computer Information Systems, B.B.A</p>
        </VerticalTimelineElement>        
      </VerticalTimeline>
    </div>
  )
}

export default Experience