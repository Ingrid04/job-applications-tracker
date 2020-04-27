import React from 'react'
import { updateJobApp } from '../actions/fetchJobApplications.js'
import { setFormDataForEdit, resetNewJobAppForm } from '../actions/newJobApplicationForm.js'
import { connect } from 'react-redux'
import NewJobApplicationForm from '../components/NewJobApplicationForm.js';

class EditJobFormContainer extends React.Component {
    // this container has access to history, that is why I dont need to pass it

    componentDidMount() {
        this.props.job && this.props.setFormDataForEdit(this.props.job)
    }

    componentDidUpdate(prevProps) {
        this.props.job && !prevProps.job && this.props.setFormDataForEdit(this.props.job)
    }

    componentWillUnmount() {
        this.props.resetNewJobAppForm()
    }

    handleSubmit = (newJobApplication, userId )=> {
        console.log("HEREEEEEE")
        const { updateJobApp, job, history } = this.props
        updateJobApp({
            ...newJobApplication,
            jobId: job.id,
            userId
        }, history)
    }

    render() {

        const { history, handleSubmit } = this.props
        return <NewJobApplicationForm editMode handleSubmit={this.handleSubmit}/>
    }
}

export default connect(null, { updateJobApp, setFormDataForEdit, resetNewJobAppForm }) (EditJobFormContainer);