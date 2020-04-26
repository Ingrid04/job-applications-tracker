import React from 'react'
import { connect } from 'react-redux'
import { fetchJobApplications } from '../actions/fetchJobApplications'
import JobApplicationsList from '../components/JobApplicationsList'

class JobApplicationsContainer extends React.Component {

    // we have to do this.props to connect fetchJobApplications() to redux store.
    // in other words, we want to access this function through props.

    render() {
        return(
            <div>
                MY JOB APPLICATIONS
                <JobApplicationsList />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state)
    return{
        jobApplicationsReducer: state.jobApplicationsReducer
    }
}

// give access to props of job_applications inside our state
// mapStateToProps is our way of accessing our store values in our store as props
// mapStateToProps gives us access to see what is already in our store. We have access to this.props.job_applications.


// const mapDispatchToProps = dispatch => {
//     return {
//       fetchJobApplications: () => dispatch(fetchJobApplications())
//     }
// }

// with mapDispatchToProps we have access to this.props.fetchJobApplications() which will update our store


export default connect(mapStateToProps,{ fetchJobApplications }) (JobApplicationsContainer);

// we have to pass it to the connect bc our connect is our way of connecting that redux store to the component.
// mapStateToProps gives us access to what is currently in the store and 
// mapDispatchToProps gives us the ability to dispatch new actions to our store directly from this component(componentDidMount).

// if this component needs access to job_applications from our store through props, how are we gonna actually get 
// those props from our backend? Through fetch! So componentDidMount.

