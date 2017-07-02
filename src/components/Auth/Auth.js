import React from "react";
import Login from "./Login";
import Register from "./Register";
import { AuthStates } from "./../../core/constants";

export default class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            state: props.state || AuthStates.SIGNIN
        };
    }
    render() {
        let _comp = (<Login onSubmit={this.props.onSwitchRegister} />);
        if (this.state.state === AuthStates.REGISTER) {
            _comp = (<Register onSubmit={this.props.onSwitchSignin} />);
        }
        return _comp;
    }
}