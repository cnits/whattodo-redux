import React, { Component } from "react";
import PropsType from "prop-types";
import { Nav, Navbar, MenuItem, NavDropdown, NavItem } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

export default class CNav extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    defaultData() {
        const routingList = {
            Home: "/",
            News: "/news",
            Login: "/login",
            Contact: "/session/contact",
            Todo: "/session/todo",
            Portfolio: "/session/portfolio",
            Links: "/session/link"
        };
        return [{
            index: 0,
            label: 'Home',
            name: 'Home',
            path: routingList.Home
        }, {
            index: 1,
            label: 'News',
            name: 'News',
            path: routingList.News
        }, {
            index: 2,
            label: 'My Session',
            name: 'MySession',
            children: [{
                index: 0, label: 'Contact', name: 'Session_Contact', path: routingList.Contact
            }, {
                index: 1, label: 'To-do', name: 'Session_Todo', path: routingList.Todo
            }, {
                index: 2, label: 'Portfolio', name: 'Session_Portfolio', path: routingList.Portfolio
            }, {
                index: 0, label: 'Links', name: 'Seesion_Link', path: routingList.Links
            }]
        }, {
            index: 3,
            label: 'Login',
            name: 'Login',
            path: routingList.Login
        }];
    }
    drawNav(data = []) {
        let navElems = [];
        data.sort((a, b) => a.index - b.index);
        for (let i in data) {
            navElems.push(this.drawNavItem(data[i], i));
        }
        return navElems;
    }
    drawNavItem(item, index) {
        if (item.hidden !== true) {
            if (item.children) {
                const children = item.children.sort((a, b) => a.index - b.index);
                let navChildren = [];
                for (let j in children) {
                    if (children[j].hidden !== true) {
                        if (!children[j].children) {
                            navChildren.push(
                                <MenuItem key={Math.random()} eventKey={`${index}.${j}`} componentClass={Link} href={children[j].path} to={children[j].path}>{children[j].label}</MenuItem>
                            );
                        } else {
                            navChildren.push(this.drawNavItem(children[j]));
                        }
                    }
                }
                if (navChildren.length) {
                    return (
                        <NavDropdown key={Math.random()} eventKey={index} title={item.label} id="basic-nav-dropdown">{navChildren}</NavDropdown>
                    );
                } else {
                    return '';
                }
            } else {
                return (
                    <NavItem key={Math.random()} eventKey={index} componentClass={Link} href={item.path} to={item.path}>{item.label}</NavItem>
                );
            }
        } else {
            return '';
        }
    }
    hideMenuItem(item) {
        if (this.props.hiddenMenu.indexOf(item.name) >= 0) {
            item.hidden = true;
        } else {
            if (Array.isArray(item.children) && item.children.length) {
                for (let i in item.children) {
                    this.hideMenuItem(item.children[i]);
                }
            }
        }
    }
    hideMenu() {
        if (Array.isArray(this.props.hiddenMenu) && this.props.hiddenMenu.length) {
            let _data = lodash.cloneDeep(this.state.data);
            for (let i in _data) {
                this.hideMenuItem(_data[i]);
            }
            this.state.data = _data;
        }
    }
    componentWillMount() {
        this.hideMenu();
    }
    componentWillDidMount() {

    }
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link className="header-title" to="/" >
                            WHAT.TO.DO
                        </Link>
                    </Navbar.Brand>
                    {/* <Navbar.Toggle /> */}
                </Navbar.Header>
                {/* <Navbar.Collapse> */}
                <Nav pullRight>
                    {this.drawNav(this.defaultData())}
                    {/* <MenuItem divider /> */}
                </Nav>
                {/* </Navbar.Collapse> */}
            </Navbar>
        );
    }
}

CNav.propTypes = {
    data: PropsType.array.isRequired
};
CNav.defaultProps = {
    data: []
};