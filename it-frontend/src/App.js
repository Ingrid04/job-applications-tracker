import React from 'react';
import './App.scss';
import { fetchJobApplications } from './actions/fetchJobApplications'
import JobApplicationsContainer from './containers/JobApplicationsContainer.js'
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser.js'
import NavBar from './components/NavBar.js';
import Login from './components/Login.js'
import Home from './components/Home.js'
import NewJobApplicationForm from './components/NewJobApplicationForm.js'
import JobApplicationCard from './components/JobApplicationCard.js'
import { Route, Switch } from 'react-router-dom'
import { setFormDataForEdit } from './actions/newJobApplicationForm.js'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
    this.props.fetchJobApplications()
  }



  render() {
    const { loggedIn,  jobApplications, setFormDataForEdit } = this.props
    return (
        <div className="App">
          { loggedIn ? <NavBar /> : <Home /> }
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" render={() => loggedIn ? <JobApplicationsContainer /> : < Home />} />  
            <Route exact path="/application/new" component={NewJobApplicationForm} />
            <Route exact path="/application/:id" render={ props => {
              const jobApp = jobApplications.flat().find(job => parseInt(job.id) === parseInt(props.match.params.id))
              console.log(jobApp)
              return <JobApplicationCard job={jobApp} {...props} />
            }} />
            <Route exact path="/application/:id/edit" render={ props => {
              const jobApp = jobApplications.flat().find(job => parseInt(job.id) === parseInt(props.match.params.id))
              jobApp && setFormDataForEdit(jobApp)
              return <NewJobApplicationForm editMode job={jobApp} {...props} />
            }} />
          </Switch>
        </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUserReducer,
    jobApplications: state.jobApplicationsReducer
  })
}


export default connect(mapStateToProps, { getCurrentUser, fetchJobApplications, setFormDataForEdit }) (App);
