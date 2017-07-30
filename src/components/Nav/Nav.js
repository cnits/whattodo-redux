import React, { Component } from "react";
import PropsType from "prop-types";
import { Nav, Navbar, MenuItem, NavDropdown, NavItem } from "react-bootstrap";
//import { Link, NavLink } from "react-router-dom";

export default class CNav extends Component {
    static propTypes = {
        data: PropsType.array.isRequired
    }
    static defaultProps = {
        data: []
    }
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentWillDidMount() {

    }
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">WHAT.TO.DO</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight>
                    <NavItem eventKey={1} href="/">Home</NavItem>
                    <NavItem eventKey={2} href="/news">News</NavItem>
                    <NavDropdown eventKey={3} title="My Session" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1} href="/session/contact">Contact</MenuItem>
                        <MenuItem eventKey={3.2} href="/session/todo">To-do</MenuItem>
                        <MenuItem eventKey={3.3} href="/session/portfolio">Portfolio</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.4} href="/link">Links</MenuItem>
                    </NavDropdown>
                    <NavItem eventKey={4} href="/login">Login</NavItem>
                </Nav>
            </Navbar>
                );
    }
}