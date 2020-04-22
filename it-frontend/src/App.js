import React from 'react';
import './App.css';
// import fetchJobApplications from './actions/fetchJobApplications'
// import JobApplicationsContainer from './containers/JobApplicationsContainer'
import Login from "./components/Login.js"
import Logout from "./components/Logout.js"
import { connect } from 'react-redux';
import { getCurrentUser } from "./actions/currentUser.js"

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      // refactor this to a nav bar
        // this.props.currentUser ? <Logout/> : <Login/>
      <Login />

    );
  }
}

// I can do this bc I know the argument is an object, state, coming from Redux.
// and I know it has a property called currentUser
// bc this is an object I can grab its properties
const mapStateToProps = ({currentUser}) => {
  return {
    currentUser 
  }
}

export default connect(mapStateToProps, { getCurrentUser }) (App);
