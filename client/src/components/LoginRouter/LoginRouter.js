import React, { Component } from 'react';
import axios from 'axios'
import SignUpOrLogin from '../SignUpOrLogin/SignUpOrLogin'
<<<<<<< HEAD
import "./LoginRouter.css";
=======
import NewPost from '../NewPost/NewPost'
>>>>>>> 61d6686d177df6a753146cba9514b6beae0da05c

class LoginRouter extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser(userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

  render() {
    return (

      <div className="card bg-light mx-auto" style={{ maxWidth: "25%", float: "center", margin: 0, float: "none" }}>
        <div className="card-body mx-auto">
<<<<<<< HEAD
          <br></br>
          <i className='fas fa-user-alt' style={{ width: "100%", fontSize: "48px" }}></i>
          <br></br>
          <br></br>
          {/* greet user if logged in: */}
          {this.state.loggedIn &&
            <p style={{ color: "rgb(45,49,66)" }}>Hey, {this.state.username}!</p>
          }
          <br></br>
          <SignUpOrLogin updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
=======
            <br></br>
            <SignUpOrLogin updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
            {/* greet user if logged in: */}
            {this.state.loggedIn &&
              <p  style={{color: "rgb(45,49,66"}}>Hey, {this.state.username}!</p> &&
              <NewPost/>
            }
>>>>>>> 61d6686d177df6a753146cba9514b6beae0da05c
        </div>
      </div>
    );
  }
}

export default LoginRouter;
