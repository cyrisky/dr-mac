import React, { Component, Fragment } from "react";
import Axios from 'axios';
import { Form } from 'reactstrap'
import NavbarTop from '../components/NavbarTop'

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
            // <Fragment>
            
            <Form>

                <h3>Log in</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1"> Remember me</label>
                    </div>
                </div>

                <br></br>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                <p className="forgot-password text-right">
                    <a href="#"> Forgot password?</a>
                </p>

            </Form>
            // </Fragment>
        );
    }
}

export default Login;