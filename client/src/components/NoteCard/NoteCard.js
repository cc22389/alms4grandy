import React, { Component } from 'react'
import axios from 'axios'

class NoteCard extends Component {
    constructor() {
        super()
        const posts = []
        this.state = { posts }

        this.getPost = this.getPost.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
        this.componentDidUpdate = this.componentDidUpdate.bind(this)
        this.updatePost = this.updatePost.bind(this)
    }

    componentDidMount() {
        this.getPost()
    }
    componentDidUpdate(prevProps) {
        if (this.props.userID !== prevProps.userID) {
            this.getPost()
        }

    }

    updatePost(postObject) {
        this.setState(postObject)
    }

    getPost() {
        axios.get('/post/getpost').then(response => {
            console.log('Get post response: ')
            console.log(response.data)
            if (response.data) {
                console.log('Get Post: posts saved here')

                this.setState({
                    posts: response.data
                })
            } else {
                console.log('Get posts: no posts');
                this.setState({
                    title: null,
                    post: null
                })
            }
        })
    }

    render() {

        return (
            <div className="card bg-light mx-auto" style={{ maxWidth: "100%", float: "center", margin: 0, }}>
                <br></br>
                <h2 style={{ textDecoration: "underline" }}>Community Bulletin Board</h2>
                <div className="card-body mx-auto">
                    {this.state.posts.slice(0).reverse().map(post => {
                        return (
                            <>
                                <p style={{ textAlign: "center" }}><strong>{post.title}</strong></p>
                                <img src={post.imageURL} style={{ maxWidth: "30%" }} alt="" />
                                <p style={{fontStyle: "italic", marginTop: "3%"}}>"{post.post}"</p>
                                <p>{post.createdDate}</p>
                                <hr style={{ width: "80%", color: "#C8C8C8" }} />

                            </>
                        )
                    })}

                </div>
            </div>
        )
    }
}

export default NoteCard;