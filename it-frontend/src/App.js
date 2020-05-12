import React from 'react';
import './App.scss';
import { fetchJobApplications } from './actions/fetchJobApplications'
import JobApplicationsContainer from './containers/JobApplicationsContainer.js'
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser.js'
import NavBar from './components/NavBar.js'
import Login from './components/Login.js'
import Home from './components/Home.js'
import JobApplicationCard from './components/JobApplicationCard.js'
import { Route, Switch } from 'react-router-dom'
import NewJobFormContainer from './containers/NewJobFormContainer'
import EditJobFormContainer from './containers/EditJobFormContainer'



class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
    this.props.fetchJobApplications()
  }



  render() {
    const { loggedIn,  jobApplications } = this.props
    return (
        <div className="App"> 
        {/* <img src="https://leverageedu.com/blog/wp-content/uploads/2019/07/Resume-in-Computer-Science-01.png" alt="image" className="img"/> */}
          { loggedIn ? <NavBar /> : <Home /> }
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" render={() => loggedIn ? <JobApplicationsContainer /> : < Home />} />  
            <Route exact path="/applications/new" component={NewJobFormContainer} />
            <Route exact path="/applications/:id" render={ props => {
              const jobApp = jobApplications.flat().find(job => parseInt(job.id) === parseInt(props.match.params.id))
              // console.log(jobApp)
              return <JobApplicationCard job={jobApp} {...props} />
            }} />
            <Route exact path="/applications/:id/edit" render={ props => {
              const jobApp = jobApplications.flat().find(job => parseInt(job.id) === parseInt(props.match.params.id))
              return <EditJobFormContainer editMode job={jobApp} {...props} />
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


export default connect(mapStateToProps, { getCurrentUser, fetchJobApplications }) (App);
