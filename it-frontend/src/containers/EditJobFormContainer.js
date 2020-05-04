import React from 'react'
import { updateJobApp, deleteJobApp } from '../actions/fetchJobApplications.js'
import { setFormDataForEdit, resetNewJobAppForm } from '../actions/newJobApplicationForm.js'
import { connect } from 'react-redux'
import NewJobApplicationForm from '../components/NewJobApplicationForm.js';

class EditJobFormContainer extends React.Component {

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
        const { updateJobApp, job, history } = this.props
        updateJobApp({
            ...newJobApplication,
            jobId: job.id,
            userId
        }, history)
    }

    render() {

        const { history, deleteJobApp, job } = this.props
        const jobId = job ? job.id : null
        return <>
                <NewJobApplicationForm editMode handleSubmit={this.handleSubmit}/>
                <br/>
                <br/>
                <button onClick={() => deleteJobApp(jobId, history)}>Delete this application</button>
                </>
    }
}

export default connect(null, { updateJobApp, setFormDataForEdit, resetNewJobAppForm, deleteJobApp }) (EditJobFormContainer);