// import React, {useState} from "react";
// import axios from "axios";

// function Notecard() {
//     // function ResultList(props) {
//     //     return (
//     //       <ul className="list-group">
//     //         {props.results.map(result => (
//     //           <li className="list-group-item" key={result.id}>
//     //             <img alt={result.title} className="img-fluid" src={result.images.original.url} />
//     //           </li>
//     //         ))}
//     //       </ul>
//     //     );
//     //   }
//     //   export default ResultList;
//     const update = (event) => {
//         event.preventDefault();
//         axios.get("/post/newpost")
//             .then()}

//     return(
//         <>
//             <button onClick={update}>test!</button>
//             {currentData.map((element=>{
//                 return(
                    
//                 <p>{element.username}</p>
                    
//                  )}
//                  ))}
//         </>
//     )
// }

// export default Notecard;

// import React, {useState} from "react";
// import axios from "axios";

// function Notecard() {
//     const [currentData, setCurrentData] = useState([])

//     const update = (event) => {
//         event.preventDefault();
//         axios.get('/user/login/')
//             .then(res => setCurrentData(res.data))
//     }

//     return(
//         <>
//             <button onClick={update}>test!</button>
//             {currentData.map(element=>{
//                 return(
//                     <p>hello Mr/Ms/Mrs: {element.username}</p>
//                  )}
//                  )}
//         </>
//     )
// }

// export default Notecard;

import React, { Component } from 'react'
import axios from 'axios'

class NoteCard extends Component {
	constructor() {
		super()
		this.state = {
			loggedIn: false,
            title: null,
            post: null,
        }
        
        this.getPost = this.getPost.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
        this.updatePost = this.updatePost.bind(this)
    }

    componentDidMount() {
        this.getPost()
    }

    updatePost(postObject) {
        this.setState(postObject)
    }

    getPost() {
        axios.get('/post/newpost').then(response => {
            console.log('Get post response: ')
            console.log(response.data)
            if(response.data.post) {
                console.log('Get Post: posts saved here')

                this.setState({
                    loggedIn: true,
                    title: response.data.post.title,
                    post: response.data.post.post
                })
            } else {
                console.log('Get posts: no posts');
                this.setState({
                    loggedIn: false,
                    title: null,
                    post: null
                })
            }
        })
    }

    render() {
        return(
            <div className="card bg-light mx-auto" style={{ maxWidth: "25%", float: "center", margin: 0, float: "none" }}>
                <div className="card-body mx-auto">

                </div>
            </div>
        )
    }
}

export default NoteCard;