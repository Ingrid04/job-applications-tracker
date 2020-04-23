import React from 'react'
import { connect } from 'react-redux'
import JobApplicationInput from "./JobApplicationInput.js"

const JobApplicationsList = (props) => {
    // debugger
    const jobList = props.jobApplicationsReducer.map(job => <JobApplicationInput job={job} key={job[0].id}/>)
   
    return(
     jobList
    )
}

// We provide mapStateToProps to redux in order to ask redux access to their state, so that we pick up
// and choose the pieces of state we would like available to this particular component as props

    const mapStateToProps = state => {
        // debugger
        return {
            jobApplicationsReducer: state.jobApplicationsReducer
        }
    }

export default connect(mapStateToProps) (JobApplicationsList);