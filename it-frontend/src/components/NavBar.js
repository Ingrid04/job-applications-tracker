import React from "react";
import { connect } from 'react-redux';
import Login from "./Login.js"
import Logout from "./Logout.js"

const NavBar = ({ currentUser }) => {
    return (
       <div className="NavBar">
            { currentUser ? <strong>Welcome, {currentUser.username}</strong> : ""}
            { currentUser ? <Logout/>  :  <Login /> }
            {/* <Login/> */}
       </div>
    )
}
// I can do this bc I know the argument is an object, state, coming from Redux.
// and I know it has a property called currentUser
// bc this is an object I can grab its properties

const mapStateToProps = state => {
    return {
      currentUser: state.
    }
}

export default connect(mapStateToProps)(NavBar);