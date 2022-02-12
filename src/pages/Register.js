// import React, { useState } from "react";
import React, { Component,Fragment } from "react";
import { Form } from 'reactstrap'
import NavbarTop from '../components/NavbarTop'
// import Axios from 'axios'
// import { useHistory } from 'react-router';

// const Register = () => {

    // const [fullname, setFullname] = useState("")
    // const [username, setUsername] = useState("")
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")
  
    // const history = useHistory();
  
    // const register = (event) => {
    //   Axios.post("auth/register", {
    //     fullname: fullname,
    //     username: username,
    //     password: password,
    //     email: email,
    //   })
    //     .then((response) => {
    //       console.log(response)
    //       history.push('/login')
    //     })
    //     .catch((err) => {
    //       console.log(err)
    //     })
    //   event.preventDefault();
    // }

class Register extends Component {
    render() {
        return (
            <Form>
                <h3>Register</h3>

                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Enter player name" />
                </div>

                <div className="form-group">
                    <label>Username</label>
                    <input type="username" className="form-control" placeholder="Enter username" />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <br>
                </br>
                <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                <p className="forgot-password text-right">
                    Already registered? <a href="#">Log in</a>
                </p>
            </Form>
        );
    }
}

export default Register