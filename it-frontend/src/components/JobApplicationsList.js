import React from 'react'
import JobApplicationCard from "./JobApplicationCard.js"

const JobApplicationsList = (props) => {
  // console.log(props)
    return (
      
          <ul>
            {props.jobs.map(job => <JobApplicationCard job={job} key={job.id}/> )}
          </ul>
       
      )
}


export default JobApplicationsList;