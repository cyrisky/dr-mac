import React, { Component, Fragment, useState } from "react";
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { auth } from '../services/Firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";
import "../index.css";
import NavbarTop from '../components/NavbarTop'


const Register = () => {

    const [inputValue, setInputValue] = useState({ email: '', password: '' })
    const { email, password } = inputValue

    const handleInput = e => {
        const { name, value } = e.target
        setInputValue(input => ({ ...input, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                if (user) {
                    setInputValue({ email: '', password: '' })
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log({ errorCode, errorMessage })
            })
    }

    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    // Showing success message
    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submitted ? '' : 'none',
                }}>
                <h3>User {email} successfully registered!!</h3>
            </div>
        );
    };

    // Showing error message jika error is true
    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? '' : 'none',
                }}>
                <h1>Please enter all the fields</h1>
            </div>
        );
    };

    return (
        <Fragment>
            <NavbarTop />
            <Container className="mt-4">
                <FormGroup className="outer">

                    <FormGroup className="inner">
                        <Form>
                            <h1>User Registration</h1>

                            <FormGroup className="form-group">
                                <Label className="label">Email</Label>
                                <Input id='email' name='email' type='email' placeholder='Email' value={email} onChange={handleInput} />
                            </FormGroup>

                            <FormGroup className="form-group">
                                <Label className="label">Password</Label>
                                <Input id='password' name='password' type='password' placeholder='Password' value={password} onChange={handleInput} />
                            </FormGroup>

                            <Button onClick={handleSubmit} type="submit" className="btn btn-dark btn-lg btn-block">Register</Button>
                            <p className="forgot-password text-right">
                                Already registered? <a href="/login">Log in</a>
                            </p>
                        </Form>
                    </FormGroup>
                    {/* Calling to the methods */}
                    <div className="messages d-flex justify-content-between">
                        {errorMessage()}
                        {successMessage()}
                    </div>
                </FormGroup>
            </Container>
        </Fragment>

    );
}

export default Register
