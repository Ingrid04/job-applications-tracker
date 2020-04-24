import React from 'react';
import './App.css';
// import fetchJobApplications from './actions/fetchJobApplications'
import JobApplicationsContainer from './containers/JobApplicationsContainer.js'
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser.js'
import NavBar from './components/NavBar.js';
import Login from './components/Login.js'
import Home from './components/Home.js'
import JobApplicationsList from './components/JobApplicationsList.js';
import NewJobApplicationForm from './components/NewJobApplicationForm.js'
import { Route, Switch } from 'react-router-dom'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const { loggedIn } = this.props
    return (
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/" render={() => loggedIn ? <JobApplicationsContainer /> : < Home />} />
            <Route exact path="/profile" render={() => loggedIn ? <JobApplicationsContainer /> : < Home />} />  
            <Route exact path="/application/new" component={NewJobApplicationForm} />
          </Switch>
        </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUserReducer
  })
}


export default connect(mapStateToProps, { getCurrentUser }) (App);
