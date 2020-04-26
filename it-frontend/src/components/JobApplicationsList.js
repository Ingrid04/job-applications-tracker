import React from 'react'
import { connect } from 'react-redux'
import JobApplicationCard from "./JobApplicationCard.js"
import { Link } from 'react-router-dom'
import {Row, Col, Container} from 'react-bootstrap'

const JobApplicationsList = (props) => {
    // debugger
    
    const jobList = props.jobApplicationsReducer.map(job => 
    (<p key={job.id}>
       <Link to={`/application/${job.id}`}> <div className="application-col light-blue">{job.application_date} </div> </Link>
       <div className="application-col light-blue">{job.company}</div>
       <div className="application-col light-blue">{job.role}</div>
       <div className="application-col light-blue">
       <Row>
                    <Col><img className="contact-pic" src="https://avada.theme-fusion.com/wp-content/uploads/2019/07/person_sample_2.jpg"/></Col>
                    <Col>{job.contact}</Col>
        </Row></div>
        <div className="application-col light-blue">{job.interview_status}</div>   
        <div className="application-col light-blue">{job.notes}</div>
       </p>))
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