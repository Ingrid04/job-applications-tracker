import React from 'react'

const JobApplicationsList = (props) => {
    // const job_applications = this.props.job_applications.map(job_application => {
    //     return(
    //         <job_application
    //         key={job_application.id}
    //         />
    //     )
    // })

    // console.log(props)
    return(
        <div>
            {props.job_applications.map(job_application => <li key={job_application.id}>{job_application.date}{job_application.company}</li>)}
        </div>
    )
}

export default JobApplicationsList;