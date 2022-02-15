import React, { Component, Fragment, useState } from "react";
import { Container, Button, Form, FormGroup, Label, Input} from 'reactstrap'
import "./LoginRegister.css";
import NavbarTop from '../components/NavbarTop'
import Footer from '../components/Footer'


export default function Register () {

    // States for registration
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
 
  // Name change handling
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };
 
  // Email change handling
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };
 
  // Password change handling
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };
 
  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h3>User {name} successfully registered!!</h3>
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
        <h3>Please enter all the fields</h3>
      </div>
    );
  };

    return (
        <Fragment>
        <NavbarTop />
        <Container>
        <FormGroup className="outer">
            
        <FormGroup className="inner">
            <Form>
                <h3>User Registration</h3>

                <FormGroup className="form-group">
                    <Label className="label">Name</Label>
                    <Input onChange={handleName} value={name}type="text" className="form-control" placeholder="Enter player name" />
                </FormGroup>

                <FormGroup className="form-group">
                    <Label className="label">Email</Label>
                    <Input onChange={handleEmail} value={email} type="email" className="form-control" placeholder="Enter email" />
                </FormGroup>

                <FormGroup className="form-group">
                    <Label className="label">Password</Label>
                    <Input onChange={handlePassword} value={password} type="password" className="form-control" placeholder="Enter password" />
                </FormGroup>
               
                <Button onClick={handleSubmit} type="submit" className="btn btn-dark btn-lg btn-block">Register</Button>
                <p className="forgot-password text-right">
                    Already registered? <a href="/login">Log in</a>
                </p>
            </Form>
        </FormGroup>
        {/* Calling to the methods */}
            <div class="d-flex justify-content-center" className="messages">
                {errorMessage()}
                {successMessage()}
            </div>
        </FormGroup>
        </Container>
        <Footer />
        </Fragment>
            
        );
}

