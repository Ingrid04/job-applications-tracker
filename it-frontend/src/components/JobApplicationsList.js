import React from 'react'
import { connect } from 'react-redux'
import JobApplicationInput from "./JobApplicationInput.js"

const JobApplicationsList = ({ job_applications }) => {
    // debugger
    // const job_applications = props.job_applications.map(job_application => 
    //         <JobApplicationInput
    //         job_application={job_application}
    //         key={job_application.id}
    //         />
    //         )
    console.log(job_applications)

    // console.log(props)
    return(
        // <div>
        //     {props.job_applications.map(job_application => <li key={job_application.id}>{job_application.date}{job_application.company}</li>)}
        // </div>
        // job_applications.length > 0 ? job_applications:null 
        <div> Job</div>
    )
}

    const mapStateToProps = state => {
        // debugger
        return {
            job_applications: state.job_applications
        }
    }

export default connect(mapStateToProps)(JobApplicationsList);