import React from "react";
import { connect } from 'react-redux';
import { logout } from '../actions/currentUser.js'
import { withRouter } from 'react-router-dom'
// with router gives me the router props

const Logout = ({logout, history}) => {

    return (
        <form onSubmit={(event) => {
            event.preventDefault()
            // default so that we dont get a refresh
            logout()
            history.push('/')
            } 
        }>
            <input type="submit" value="Log Out" />
        </form>
    )
}

export default withRouter(connect( null, { logout })(Logout));