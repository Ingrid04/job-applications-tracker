import React from 'react'
import { connect } from 'react-redux'
import { fetchJobApplications } from '../actions/fetchJobApplications'
import JobApplicationsList from '../components/JobApplicationsList'
import { NavLink } from 'react-router-dom'


class JobApplicationsContainer extends React.Component {

    state = {
        query: ''
    }

    handleSubmit = event => {
        event.preventDefault()
    }

    componentDidMount() {
        this.props.fetchJobApplications()
    }


    render() {

        const filteredJobs = this.props.jobApplicationsReducer.filter(job => {
            return  this.state.query ? job.role.toLowerCase().includes(this.state.query.toLowerCase()) : true 
        })
        return(
            <div>
                <nav className="nav"> 
                    <NavLink to="/applications/new" className="link2"> Create Application </NavLink > 
                </nav>
                <h4 className="job"> MY JOB APPLICATIONS </h4>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Search by Role" 
                        value={this.state.query} 
                        onChange={event => this.setState({ 
                            query: event.target.value
                        })} 
                    />
                    <button type="submit">Submit</button>
                </form>
                <JobApplicationsList jobs={filteredJobs}/>
               
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        jobApplicationsReducer: state.jobApplicationsReducer,

    }
}


export default connect(mapStateToProps,{ fetchJobApplications }) (JobApplicationsContainer);


