import React from 'react'
import { connect } from 'react-redux'
import JobApplicationInput from "./JobApplicationInput.js"

const JobApplicationsList = ({ jobApplicationsReducer}) => {
    // debugger
    // const job_applications = props.jobApplicationsReducer.map(jobApplication => 
    //         <JobApplicationInput
    //         jobApplication={jobApplication}
    //         key={jobApplication.id}
    //         />
    //         )

    return(
        
    <div>jobApplicationsReducer</div>
    )
}

    const mapStateToProps = state => {
        // debugger
        return {
            jobApplicationsReducer: state.jobApplicationsReducer
        }
    }

export default connect(mapStateToProps) (JobApplicationsList);