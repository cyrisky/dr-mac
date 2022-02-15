import React, { Component, Fragment, useState } from "react";
import { Container, Button, Form, FormGroup, Label, Input} from 'reactstrap'
import "../index.css";
import NavbarTop from "../components/NavbarTop";

class Login extends Component {

    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //       email: '',
    //       password: '',
    //       loginStatus: false
    //     }
    //   }
    
    //   emailHandler = (event) => {
    //     this.setState({ email: event.target.value });
    //   };
    
    //   passwordHandler = (event) => {
    //     this.setState({ password: event.target.value });
    //   };
    
    //   login = (event) => {
    //     event.preventDefault();
    
    //     const data = {
    //       email: this.state.email,
    //       password: this.state.password
    //     }
    
    //     const checkToken = (data) => {
    //       if (data === "Wrong password!") {
    //         this.props.history.push('/login')
    //         alert(data)
    //       } else {
    //         this.props.history.push('/login')
    //         alert(data)
    //       }
    //     }
    
    //     Axios.post("auth/login", data)
    //       .then((res) => {
    //         if (!res.data) {
    //           this.setState({ loginStatus: false });
    //           console.log("Silahkan login")
    //         } else {
    //           if (res.data.email) {
    //             this.setState({ loginStatus: true });
    //             localStorage.setItem('token', "Bearer " + res.data.accessToken);
    //             this.props.history.push('/home');
    //           } else {
    //             checkToken(res.data);
    //           }
    //         }
    //       }).catch((err) => {
    //         this.props.history.push('/login')
    //       });
    
    //   }

    render() {
        return (
        <Fragment>
        <NavbarTop />
        <Container>
        <FormGroup className="outer">
        <FormGroup className="inner">
            <Form>
                <h3>Log in</h3>

                <FormGroup>
                    <Label>Email</Label>
                    <Input type="email" className="form-control" placeholder="Enter email" />
                </FormGroup>

                <FormGroup>
                    <Label>Password</Label>
                    <Input type="password" className="form-control" placeholder="Enter password" />
                </FormGroup>

                <FormGroup>
                    <FormGroup className="custom-control custom-checkbox">
                        <Input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <Label className="custom-control-label" htmlFor="customCheck1"> Remember me</Label>
                    </FormGroup>
                </FormGroup>

                <Button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</Button>
                <p className="forgot-password text-right">
                    <a href="#"> Forgot password?</a>
                </p>

            </Form>
            </FormGroup>
            </FormGroup>
            </Container>
            </Fragment>
        );
    }
}

export default Login;
