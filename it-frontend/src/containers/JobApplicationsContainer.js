import React from 'react'
import JobApplicationInput from '../components/JobApplicationInput'
import JobApplicationsList from '../components/JobApplicationsList'

class JobApplicationsContainer extends React.Component {

    render() {
        return(
            <div>
                <JobApplicationInput />
                <JobApplicationsList />
            </div>
        )
    }
}

export default JobApplicationsContainer;