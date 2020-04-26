import React from 'react'
import { connect } from 'react-redux'
import JobApplicationCard from "./JobApplicationCard.js"
import { Link } from 'react-router-dom'

const JobApplicationsList = (props) => {
    // debugger
    console.log(props)

    const jobList = props.jobApplicationsReducer.map(job => (<p key={parseInt(job.id)}>
       <Link to={`/application/${job.id}`}> {job.application_date} </Link> </p>)
    )
   
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