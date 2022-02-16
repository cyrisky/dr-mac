import React, { Component, Fragment, useState } from "react";
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { withRouter } from '../libs/withRouter';
import { auth } from '../services/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import "./LoginRegister.css";
import NavbarTop from "../components/NavbarTop";

const Login = (props) => {
    const [inputValue, setInputValue] = useState({ email: '', password: '' })
    const { email, password } = inputValue

    const handleInput = (e) => {
        const { name, value } = e.target
        setInputValue({ ...inputValue, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                const isLogin = userCredential.user
                if (isLogin) {
                    setInputValue({ email: '', password: '' })
                    props.navigate('/homepageplayer')
                }
            })
            .catch(err => {
                alert(err.message)
            })
    }

    return (
        <Fragment>
            <NavbarTop />
            <Container>
                <FormGroup className="outer">
                    <FormGroup className="inner">
                        <Form onSubmit={handleSubmit}>
                            <h1>Log in</h1>

                            <FormGroup>
                                <Label>Email</Label>
                                <Input id='email' name="email" type="email" placeholder="Enter email" onChange={handleInput} />
                            </FormGroup>

                            <FormGroup>
                                <Label>Password</Label>
                                <Input id='password' name="password" type="password" placeholder="Enter password" onChange={handleInput} />
                            </FormGroup>

                            <FormGroup>
                                <FormGroup className="custom-control custom-checkbox">
                                    <Input type="checkbox" className="custom-control-input" id="customCheck1" />
                                    <Label className="custom-control-label" htmlFor="customCheck1"> Remember me</Label>
                                </FormGroup>
                            </FormGroup>

                            <Button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</Button>
                            <p className="register-first text-right">
                                <a href="Register"> Register first?</a>
                            </p>
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

export default withRouter(Login);
