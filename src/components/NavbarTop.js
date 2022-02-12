import React, { Component } from "react";
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from "reactstrap";
import { Link } from 'react-router-dom';

class NavbarTop extends Component {
    state = { isOpen: false}
    toggleCollapse = () => {
        this.setState({isOpen: !this.state.isOpen})
    }

    render() {
        const { isOpen } = this.state
        return (
            <Navbar color="dark" dark expand="lg">
                <NavbarBrand href="/">DR.MAC</NavbarBrand>
                <NavbarToggler onClick={this.toggleCollapse} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem className="px-2">
                            <Link to="/">Home</Link>
                        </NavItem>
                        <NavItem className="px-2">
                            <Link to="/about">Game List</Link>
                        </NavItem>
                        <NavItem className="px-2">
                            <Link to="/register">Sign Up</Link>
                        </NavItem>
                        <NavItem className="px-2">
                            <Link to="/login">Login</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        )
    }
}

export default NavbarTop;
