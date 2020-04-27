import React from 'react'
import { createJobApplication } from '../actions/fetchJobApplications.js'
import { connect } from 'react-redux'
import NewJobApplicationForm from '../components/NewJobApplicationForm.js';

const NewJobFormContainer = ({ history, createJobApplication}) => {

    const handleSubmit = (newJobApplication, userId )=> {
        createJobApplication({
            ...newJobApplication,
            userId
        }, history)
    }

    return <NewJobApplicationForm history={history} handleSubmit={handleSubmit}/>
}

export default connect(null, { createJobApplication }) (NewJobFormContainer);