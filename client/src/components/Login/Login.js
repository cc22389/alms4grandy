import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
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
                    this.setState({
                        username: response.data.username,
                        redirectTo: '/communitylanding'
                    })
                    window.location.reload(); 
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
                                style={{fontSize: "100%", width: "50%"}}
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
                                style={{fontSize: "100%", width: "50%"}}
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
                                style={{background: "#fdd835", color: "rgb(45,49,66", padding:"5px 5px", border: "#fdd835", borderRadius: "4px", fontSize: "100%"}}
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
