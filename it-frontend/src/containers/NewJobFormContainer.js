import React from 'react'
import { createJobApplication } from '../actions/fetchJobApplications.js'
import { connect } from 'react-redux'
import NewJobApplicationForm from '../components/NewJobApplicationForm.js';
import { NavLink } from 'react-router-dom'

const NewJobFormContainer = ({ history, createJobApplication}) => {

    const handleSubmit = (newJobApplication, userId )=> {
        
        createJobApplication({
            ...newJobApplication,
            userId
        }, history)
        // debugger
    }

    return (
        <div>
            <nav className="nav">
                <NavLink to="/profile" className="link1"> My Applications </NavLink>
            </nav>
            <div className="margin-form">
                <NewJobApplicationForm history={history} handleSubmit={handleSubmit}/> 
            </div>
        </div>
    )
}

export default connect(null, { createJobApplication }) (NewJobFormContainer);