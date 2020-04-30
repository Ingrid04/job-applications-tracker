import React from 'react';
import { connect } from 'react-redux';
import Logout from './Logout.js';
import { NavLink } from 'react-router-dom'

const NavBar = ({ currentUserReducer }) => {
    return (
       <div className="NavBar">
         <h4> { currentUserReducer ? <strong> Welcome, {currentUserReducer.username}  <br/><a className="button"> <Logout/> </a> </strong> : ""} </h4>
            <NavLink to="/profile" className="link1"> My Job Applications </NavLink>
            <NavLink to="/application/new" className="link2"> New Application </NavLink >
       </div>
    )
}
// I can do this bc I know the argument is an object, state, coming from Redux.
// and I know it has a property called currentUser
// bc this is an object I can grab its properties

const mapStateToProps = state => {
    return {
      currentUserReducer: state.currentUserReducer
    }
}

export default connect(mapStateToProps)(NavBar);