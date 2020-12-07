import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class SignUpOrLogin extends Component {
    constructor() {
        super()
        this.logout = this.logout.bind(this)
    }

    logout(event) {
        event.preventDefault()
        console.log('logging out')
        axios.post('/user/logout').then(response => {
            console.log(response.data)
            if (response.status === 200) {
                this.props.updateUser({
                    loggedIn: false,
                    username: null
                })
            }
        }).catch(error => {
            console.log('Logout error')
        })
    }

    render() {
        const loggedIn = this.props.loggedIn;
        console.log('navbar render, props: ')
        console.log(this.props);

        return (
            <div>
                {loggedIn ? (
                    <section>
                        <button
                            onClick={this.logout}
                            type="submit"
                            style={{ background: "#fdd835", color: "rgb(45,49,66", padding: "5px 5px", border: "#fdd835", borderRadius: "4px", fontSize: "70%" }}
                        ><strong>Logout</strong>
                        </button>
                    </section>

                ) : (

                        <section>
                            <Link to="/loginpage">
                                <div style={{ color: "rgb(45,49,66)", fontSize: "100%" }}>Administrator Login</div>
                            </Link>
                        </section>
                    )}
                <br></br>

            </div>

        );

    }
}

export default SignUpOrLogin;