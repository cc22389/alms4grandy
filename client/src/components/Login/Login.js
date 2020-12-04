import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { authorize } from 'passport'
import "./Login.css";

class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            redirectTo: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log('handleSubmit')

        axios
            .post('/user/login', {
                username: this.state.username,
                password: this.state.password
            })
            .then(response => {
                console.log('login response: ')
                console.log(response)
                if (response.status === 200) {
                    // update App.js state
                    this.props.updateUser({
                        loggedIn: true,
                        username: response.data.username
                    })
                    // update the state to redirect to home
                    this.setState({
                        redirectTo: '/'
                    })
                }
            }).catch(error => {
                console.log('login error: ')
                console.log(error);

            })
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <div >
                    <form >
                        <div >
                            <input
                                style={{fontSize: "60%", width: "60%"}}
                                type="text"
                                id="username"
                                name="username"
                                placeholder="Email or Username"
                                value={this.state.username}
                                onChange={this.handleChange}
                            />
                        </div>
                        <br></br>
                        <div>
                            <input
                                style={{fontSize: "60%", width: "60%"}}
                                placeholder="Password"
                                type="password"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                        </div>
                        <br></br>
                        <div>
                            <button
                                onClick={this.handleSubmit}
                                type="submit"
                                style={{background: "#fdd835", color: "rgb(45,49,66", border: "#fdd835", borderRadius: "4px", fontSize: "70%", width: "20%"}}
                                ><strong>Login</strong>
                            </button>
                        </div>
                    </form>
                </div>
            )
        }
    }
}

export default Login
