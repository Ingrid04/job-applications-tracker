import React from 'react';
import './App.css';
import { connect } from 'react-redux'
//import fetchJobApplications from './actions/fetchJobApplications'
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

// mapStateToProps is our way of accessing our store values in our store as props
// const mapStateToProps = (state) => {
//       return {
//         job_applications: state.job_applications
//       }
// } 
// mapStateToProps gives us access to see what is already in our store. We have access to this.props.job_applications.




// with mapDispatchToProps we have access to this.props.fetchJobApplications() which will update our store



export default connect() (App);
// we have to pass it to the connect bc our connect is our way of connecting that redux store to the component.
// mapStateToProps gives us access to what is currently in the store and 
// mapDispatchToProps gives us the ability to dispatch new actions to our store directly from this component(componentDidMount).
