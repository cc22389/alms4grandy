import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

class SignUp extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			confirmPassword: '',
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
		console.log('sign-up handleSubmit, username: ')
		console.log(this.state.username)
		event.preventDefault()

		//request to server to add a new username/password
		axios.post('/user/', {
			username: this.state.username,
			password: this.state.password
		})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('successful signup')
					alert("Successful sign-up")
					this.setState({ //redirect to login page
						redirectTo: '/communitylanding'
					})
					window.location.reload();
				} else {
					console.log('username already taken')
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)

			})
	}


	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		} else {
			return (
				<div>
					<form >
						<div>
							<input
								style={{ fontSize: "60%", width: "70%" }}
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
								style={{ fontSize: "60%", width: "70%" }}
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
								// className="btn btn-primary col-1 col-mr-auto"
								onClick={this.handleSubmit}
								type="submit"
								style={{ background: "#fdd835", color: "rgb(45,49,66", padding: "5px 5px", border: "#fdd835", borderRadius: "4px", fontSize: "60%" }}
							><strong>Sign Up</strong>
							</button>

						</div>
					</form>
				</div>

			)
		}
	}
}

export default SignUp
