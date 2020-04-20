import React from 'react';
import './App.css';
import { connect } from 'react-redux'
// import fetchJobApplications from './actions/fetchJobApplications'
import JobApplicationsContainer from './containers/JobApplicationsContainer'

class App extends React.Component {


  render() {

    return (
      <div className="App">
        <JobApplicationsContainer />
      </div>
    );
  }
}

export default App;
