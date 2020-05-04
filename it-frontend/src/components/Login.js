import React from "react";
import { connect } from 'react-redux';
import { updateLoginForm } from '../actions/loginForm.js'
import { login } from '../actions/currentUser.js'

const Login = ({loginForm, updateLoginForm, login, history }) => {

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
        if (!event.target.checkValidity()) {
            return alert("Invalid username or email")
          } else {
              login(loginForm, history)
          }
    }
    return (
        <form onSubmit={handleSubmit} noValidate >
            <input placeholder="username" value={loginForm.username} name="username" type="text" onChange={handleOnChange} required />
            <input placeholder="email" value={loginForm.email} name="email" type="email" onChange={handleOnChange} required />
            <input type="submit" value="Log In" />     
        </form>

    )
}

const mapStateToProps = state => {
    return {
    //  username: state.loginForm.username,
    //  email: state.loginForm.email
    loginForm: state.loginForm
    }
}

export default connect(mapStateToProps, { updateLoginForm, login })(Login);