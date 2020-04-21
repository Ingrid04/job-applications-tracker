import React from "react";
import { connect } from 'react-redux';
import { updateLoginForm } from '../actions/loginForm.js'
import { login } from '../actions/currentUser.js'

const Login = ({loginForm, updateLoginForm, login}) => {
    // this updateLoginForm is not the same than the import, it is a redux version of that function of the action creator,
    // so we can use it as a callback

    const handleOnChange = event => {
        const {name, value} = event.target
        const updateFormInfo = {
            ...loginForm,
            [name]: value
        }
        updateLoginForm(updateFormInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()
        login(loginForm)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="username" value={loginForm.username} name="username" type="text" onChange={handleOnChange} />
            <input placeholder="email" value={loginForm.email} name="email" type="text" onChange={handleOnChange} />
            <input type="submit" value="Log In" />
        
        </form>

    )
}

// connects to data coming in here to the store. we are taking state from redux.
// Like redux I need these states from the store. READ ONLY.
// This gives me an argument coming to this component that looks like this:
// {
//     username: "something",
//     email:"something"
// }
const mapStateToProps = state => {
    return {
     // username: state.loginForm.username,
        // email: state.loginForm.email
        loginForm: state.loginForm
    }
}

export default connect(mapStateToProps, { updateLoginForm, login })(Login);