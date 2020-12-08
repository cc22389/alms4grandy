import React, { Component } from 'react'
import axios from 'axios'

class EditAndDeletePost extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            post: '',

        }
        this.handleChange = this.handleChange.bind(this)
        this.Edit = this.Edit.bind(this)
        this.Delete = this.Delete.bind(this)
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    Edit(event) {
        console.log(this.state.title)
        console.log(this.state.post)
        event.preventDefault()
        axios.put('/post/editpost/:id', {
            title: this.state.title,
            imageURL: this.state.imageURL,
            post: this.state.post
        })
            .then(response => {
                console.log(response)
                if (!response.data.errmsg) {
                    console.log('successful update')
                } else {
                    console.log('post was not updated')
                }
            }).catch(error => {
                console.log('post error: ')
                console.log(error)

            })
    }

    Delete(event) {
        console.log(this.state.title)
        console.log(this.state.post)
        event.preventDefault()
        axios.delete('/post/deletepost/:id', {

        })
            .then(response => {
                console.log(response)
                if (!response.data.errmsg) {
                    console.log('successful delete')
                } else {
                    console.log('post was not deleted')
                }
            }).catch(error => {
                console.log('post error: ')
                console.log(error)

            })
    }


    render() {
        return (
            <div>
                <button
                    onClick={this.Edit}
                    type="submit"
                    style={{ background: "#fdd835", color: "rgb(45,49,66", padding: "5px 5px", border: "#fdd835", borderRadius: "4px", fontSize: "100%" }}
                ><strong>Edit</strong>
                </button>

                <button
                    onClick={this.Delete}
                    type="submit"
                    style={{ background: "#fdd835", color: "rgb(45,49,66", padding: "5px 5px", border: "#fdd835", borderRadius: "4px", fontSize: "100%" }}
                ><strong>Delete</strong>
                </button>


            </div>

        )
    }
}

export default EditAndDeletePost
