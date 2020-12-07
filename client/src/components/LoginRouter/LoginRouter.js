import React, { Component } from 'react';
import axios from 'axios'
import SignUpOrLogin from '../SignUpOrLogin/SignUpOrLogin'
import "./LoginRouter.css";
import NewPost from '../NewPost/NewPost'
import SignUp from '../SignUp/SignUp';

class LoginRouter extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null,
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

      <div className="card bg-light mx-auto" style={{ maxWidth: "25%", float: "center", margin: 0 }}>
        <div className="card-body mx-auto">
          <br></br>
          <i className='fas fa-user-alt' style={{ width: "100%", fontSize: "48px" }}></i>
          <br></br>
          <br></br>
          <SignUpOrLogin updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
          {/* greet user if logged in: */}
          {this.state.loggedIn &&
            <div>
              <p style={{ color: "rgb(45,49,66" }}>Hey, {this.state.username}!</p>
              <NewPost />
              <br></br>

              <div style={{ color: "rgb(45,49,66)", fontSize: "100%" }} >Create New Account<br/><br/>
              <SignUp />
              </div>
            </div>

          }
        </div>
      </div >
    );
  }
}

export default LoginRouter;
