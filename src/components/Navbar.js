import React, { Component, Fragment } from "react";
import Navbar from 'react-bootstrap/Navbar'
import { Container } from "react-bootstrap";

class NavbarTop extends Component{
    render(){
        return (

            <Fragment>
                <Navbar bg="dark" variant="dark">
                <Container>
                        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                        <NavbarTop className="me-auto">
                        <NavbarTop.Link href="#home">Home</NavbarTop.Link>
                        <NavbarTop.Link href="#features">Features</NavbarTop.Link>
                        <NavbarTop.Link href="#pricing">Pricing</NavbarTop.Link>
                    </NavbarTop>
                    </Container>
                </Navbar>


            </Fragment>
            
        )
    }
}

export default NavbarTop;