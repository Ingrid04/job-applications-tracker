import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'
import '../styles/applications.scss'
import { Link } from 'react-router-dom'

const JobApplicationCard = ( {job} ) => {

    // console.log(job)

    return (
        job  ?
        <Container fluid style={{marginTop: "40px"}} >
            <Row className="application-row">
                <div className="application-col">Application Date</div>
                <div className="application-col">Company</div>
                <div className="application-col">Role</div>
                <div className="application-col">Contact</div>
                <div className="application-col">Interview Status</div>
                <div className="application-col">Notes</div>
            </Row>
         
            <Row className='application-row'>
                                <div className="application-col light-blue">{job.application_date}</div>
                                <div className="application-col light-blue">{job.company}</div>
                                <div className="application-col light-blue">{job.role}</div>
                                <div className="application-col light-blue">
                                    <Row>
                                        <Col><img className="contact-pic" src="https://avada.theme-fusion.com/wp-content/uploads/2019/07/person_sample_2.jpg" alt="contact"/></Col>
                                        <Col>{job.contact}</Col>
                                    </Row>
                                </div>
                                <div className="application-col light-blue">{job.interview_status}</div>   
                                <div className="application-col light-blue">{job.notes}</div>
                            </Row>
             
            <div className="edit-btn"> 
                <Link to={`/applications/${job.id}/edit`}>Edit</Link>
            </div>
            {/* <div className="list-btn"> 
                <Link to="/profile">Go back to my applications</Link>
            </div> */}
        
        </Container> :
        <p> This is Your Card With No Application </p>
    )
    
}

export default JobApplicationCard;