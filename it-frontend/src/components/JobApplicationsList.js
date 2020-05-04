import React from 'react'
import { connect } from 'react-redux'
import JobApplicationCard from "./JobApplicationCard.js"

const JobApplicationsList = (props) => {
    // debugger
    
    // const jobList = props.jobApplicationsReducer.map(job => <JobApplicationCard job={job} key={job.id}/>)
    const jobList = () => {
        console.log(props.jobApplicationsReducer)
        return(props.jobApplicationsReducer.map(job => <JobApplicationCard job={job} key={job.id}/>))

    }
    
        return(
            // console.log(jobList) 
            jobList()
        )
}

    const mapStateToProps = state => {
        return {
            jobApplicationsReducer: state.jobApplicationsReducer
        }
    }

export default connect(mapStateToProps)(JobApplicationsList);