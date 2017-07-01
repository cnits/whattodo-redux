import React, { Component } from "react";
import PropsType from "prop-types";
import { Nav, Navbar, MenuItem, NavDropdown, NavItem } from "react-bootstrap";

export default class CNav extends Component {
    static propTypes = {
        data: PropsType.array.isRequired
    }
    static defaultProps = {
        data: []
    }
    constructor(props) {
        super(props);
        this.state =  {};
    }
    componentWillDidMount() {

    }
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">WHAT.TO.DO</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href="#">Link</NavItem>
                    <NavItem eventKey={2} href="#">Link</NavItem>
                    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Action</MenuItem>
                        <MenuItem eventKey={3.2}>Another action</MenuItem>
                        <MenuItem eventKey={3.3}>Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.4}>Separated link</MenuItem>
                    </NavDropdown>
                </Nav>
            </Navbar>
        );
    }
}