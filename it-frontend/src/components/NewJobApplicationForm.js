import React from 'react';
import { updateNewJobAppForm } from '../actions/newJobApplicationForm.js'
import { connect } from 'react-redux'


const NewJobApplicationForm = ({ newJobApplication, updateNewJobAppForm, userId, handleSubmit, editMode }) => {

    const handleChange = event => {
        const { value, name } = event.target
        updateNewJobAppForm(name, value)
    }

    return(

        <form onSubmit={ event => { 
            event.preventDefault()
            handleSubmit(newJobApplication, userId)}
        }>
            <input
            placeholder="application date"
            name="applicationDate"
            onChange={handleChange}
            value={newJobApplication.applicationDate}
            /><br/>
            <input
            placeholder="company"
            name="company"
            onChange={handleChange}
            value={newJobApplication.company}
            /><br/>
            <input
            placeholder="role"
            name="role"
            onChange={handleChange}
            value={newJobApplication.role}
            /><br/>
            <input
            placeholder="contact"
            name="contact"
            onChange={handleChange}
            value={newJobApplication.contact}
            /><br/>
            <input
            placeholder="interview status"
            name="interviewStatus"
            onChange={handleChange}
            value={newJobApplication.interviewStatus}
            /><br/>
            <input
            placeholder="notes"
            name="notes"
            onChange={handleChange}
            value={newJobApplication.notes}
            />
            <br/>
            <br/>
            <input type="submit" 
            value= {editMode ? "Update this Application" : "Add Application"} />

        </form>
)};

const mapStateToProps = state => {
    // console.log(state.newJobApplication)
    const userId = state.currentUserReducer ? state.currentUserReducer.id : "" 
    return{
        newJobApplication: state.newJobApplication,
        userId
    }
}

export default connect (mapStateToProps, { updateNewJobAppForm }) (NewJobApplicationForm);
