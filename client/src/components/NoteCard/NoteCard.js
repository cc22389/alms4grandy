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
    componentDidUpdate(prevProps){
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
            if(response.data) {
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
        
        return(
            <div className="card bg-light mx-auto" style={{ maxWidth: "25%", float: "center", margin: 0}}>
                <div className="card-body mx-auto">
{this.state.posts.map(post => {
    return(
        <>
<p>{post.title}</p>
<img src={post.imageURL}/>
<p>{post.post}</p>
</>
    )
})}

                </div>
            </div>
        )
    }
}

export default NoteCard;