// import React, { useState } from "react";
import React, { Component, Fragment } from "react";
import { Container, Button, Form, FormGroup, Label, Input} from 'reactstrap'
import "../index.css";
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
        <Fragment>
        <NavbarTop />

        <FormGroup className="outer">
        <FormGroup className="inner">
            <Form>
                <h3>Register</h3>

                <FormGroup className="form-group">
                    <Label>Name</Label>
                    <Input type="text" className="form-control" placeholder="Enter player name" />
                </FormGroup>

                <FormGroup className="form-group">
                    <Label>Username</Label>
                    <Input type="username" className="form-control" placeholder="Enter username" />
                </FormGroup>

                <FormGroup className="form-group">
                    <Label>Email</Label>
                    <Input type="email" className="form-control" placeholder="Enter email" />
                </FormGroup>

                <FormGroup className="form-group">
                    <Label>Password</Label>
                    <Input type="password" className="form-control" placeholder="Enter password" />
                </FormGroup>
               
                <Button type="submit" className="btn btn-dark btn-lg btn-block">Register</Button>
                <p className="forgot-password text-right">
                    Already registered? <a href="/login">Log in</a>
                </p>
            </Form>
        </FormGroup>
        </FormGroup>

        </Fragment>

            
            
        );
    }
}

export default Register