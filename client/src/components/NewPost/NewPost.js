import React, { Component } from 'react'
import axios from 'axios'

class NewPost extends Component {
	constructor() {
		super()
		this.state = {
			title: '',
			post: '',

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
		console.log(this.state.title)
		console.log(this.state.post)
		event.preventDefault()

		//request to server to add a new title/post
		axios.post('/post/newpost', {
			title: this.state.title,
			post: this.state.post
		})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('successful post')
				} else {
					console.log('title already taken')
				}
			}).catch(error => {
				console.log('post error: ')
				console.log(error)

			})
	}


	render() {
		return (
			<div>
				<form >
					<div>
						<input
							style={{fontSize: "60%"}}
							type="text"
							id="title"
							name="title"
							placeholder="Post Title"
							value={this.state.title}
							onChange={this.handleChange}
						/>
					</div>
					<br></br>
					<div>
						<input 
							style={{fontSize: "60%"}}
							placeholder="post"
							type="text"
							name="post"
							value={this.state.post}
							onChange={this.handleChange}
						/>
					</div>
					<br></br>
					<div>
						<button
							// className="btn btn-primary col-1 col-mr-auto"
							onClick={this.handleSubmit}
							type="submit"
							style={{background: "#fdd835", color: "rgb(45,49,66", padding:"5px 5px", border: "#fdd835", borderRadius: "4px", fontSize: "70%"}}
                            ><strong>Post</strong>
						</button>
						
					</div>
				</form>
			</div>

		)
	}
}

export default NewPost
