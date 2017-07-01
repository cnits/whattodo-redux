import React from "react";
import Login from "./Login";
import Register from "./Register";

export default class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.authConst = {
            LOGIN: "LOGIN",
            REGISTER: "REGISTER"
        }
        this.state = {
            type: props.type || this.authConst.LOGIN
        };
    }
    render() {
        let _comp = (<Login />);
        if (this.state.type === this.authConst.REGISTER) {
            _comp = (<Register />);
        }
        return _comp;
    }
}