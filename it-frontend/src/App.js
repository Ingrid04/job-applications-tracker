import React from 'react';
import './App.css';
// import fetchJobApplications from './actions/fetchJobApplications'
import JobApplicationsContainer from './containers/JobApplicationsContainer.js'
import { connect } from 'react-redux';
import { getCurrentUser } from "./actions/currentUser.js"
import NavBar from './components/NavBar.js';
import JobApplicationsList from './components/JobApplicationsList';

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <JobApplicationsContainer />
        <JobApplicationsList />
      </div>

    );
  }
}


export default connect(null, { getCurrentUser }) (App);
