import React from 'react';
import './App.css';
// import fetchJobApplications from './actions/fetchJobApplications'
import JobApplicationsContainer from './containers/JobApplicationsContainer'
import Login from "./components/Login.js"
import { connect } from 'react-redux';
import { getCurrentUser } from "./actions/currentUser.js"

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }


  render() {

    return (
      <div className="App">
        <JobApplicationsContainer />
        <Login />
      </div>
    );
  }
}

export default connect(null, { getCurrentUser }) (App);
