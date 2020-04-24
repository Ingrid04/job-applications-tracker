import React from 'react';
import { updateNewJobAppForm } from '../actions/newJobApplicationForm.js'
import { connect } from 'react-redux'

const NewJobApplicationForm = ({ newJobApplication, history }) => {

    const handleChange = event => {
        const { value, name } = event.target
        updateNewJobAppForm(name, value)
        // this last line represents my action creator
    }

    const handleSubmit = event => event.preventDefault()

    return(

        <form onSubmit={handleSubmit}>
            <input
            placeholder="application date"
            name="applicationDate"
            onChange={handleChange}
            // value={newJobApplication.applicationDate}
            /><br/>
            <input
            placeholder="company"
            name="company"
            onChange={handleChange}
            // value={newJobApplication.company}
            /><br/>
            <input
            placeholder="role"
            name="role"
            onChange={handleChange}
            // value={newJobApplication.role}
            /><br/>
            <input
            placeholder="contact"
            name="contact"
            onChange={handleChange}
            // value={newJobApplication.contact}
            /><br/>
            <input
            placeholder="interview status"
            name="interviewStatus"
            onChange={handleChange}
            // value={newJobApplication.interviewStatus}
            /><br/>
            <input
            placeholder="notes"
            name="notes"
            onChange={handleChange}
            // value={newJobApplication.notes}
            />
            <br/>
            <input type="submit" value="Add Application" />

        </form>
)};

const mapStateToProps = state => {
    return{
        newJobApplication: state.newJobApplication
    }
}
export default connect (mapStateToProps, { updateNewJobAppForm }) (NewJobApplicationForm);