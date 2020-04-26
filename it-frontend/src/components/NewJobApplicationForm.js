import React from 'react';
import { updateNewJobAppForm } from '../actions/newJobApplicationForm.js'
// 1 - we first grab the action creator
import { connect } from 'react-redux'

//  3 - This means REDUX gives us back a prop called updateNewJobAppForm,
//  which when invoked, actually REDUX will now dispatch
const NewJobApplicationForm = ({ newJobApplication, history,  updateNewJobAppForm, userId, handleSubmit}) => {

    const handleChange = event => {
        const { value, name } = event.target
        updateNewJobAppForm(name, value)
        //  4 - THIS IS JUST AN INVOCATION OF JUST THE ACTION CREATOR,
        // it is not REDUX dispatching the action built by the actions creator with the appropiate arguments.
        // this last line represents my action creator. I want to invoke the one that I get from redux as props,
        // So I have to destructure closer to handle change which is in const NewJobApplicationForm
    }

    // const handleSubmit = event => {
    //     event.preventDefault()
    //     createJobApplication({
    //         ...newJobApplication,
    //         userId
    //     }, history)
    // }

    return(

        <form onSubmit={ event => {
            handleSubmit(event, newJobApplication, userId, history)}
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
            <input type="submit" value="Add Application" />

        </form>
)};

const mapStateToProps = state => {
    console.log(state.newJobApplication)
    const userId = state.currentUserReducer ? state.currentUserReducer.id : "" 
    return{
        newJobApplication: state.newJobApplication,
        userId
    }
}
// 2- we pass the action creator to REDUX's connect function using either
// mapDispatchToProps or the shorthand syntax : { updateNewJobAppForm }
export default connect (mapStateToProps, { updateNewJobAppForm }) (NewJobApplicationForm);
// I'm giving { updateNewJobAppForm } to redux. Here is an action creation, takes this action and redux takes it and
// take dispatch in the store and all the redux thing come together and give it back to me as props