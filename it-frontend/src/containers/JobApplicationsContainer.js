import React from 'react'
import { connect } from 'react-redux'
import { fetchJobApplications } from '../actions/fetchJobApplications'
import JobApplicationsList from '../components/JobApplicationsList'

class JobApplicationsContainer extends React.Component {

    render() {
        return(
            <div>
                <h4 className="job"> MY JOB APPLICATIONS </h4>
                <JobApplicationsList />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        jobApplicationsReducer: state.jobApplicationsReducer
    }
}


export default connect(mapStateToProps,{ fetchJobApplications }) (JobApplicationsContainer);


