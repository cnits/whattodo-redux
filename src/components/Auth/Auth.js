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
    componentWillReceiveProps(nextProps) {
        this.state.state = nextProps.state;
    }
    render() {
        let _comp = (<Login onSwitchRegister={this.props.onSwitchRegister} onSignin={this.props.onSignin} />);
        if (this.state.state === AuthStates.REGISTER) {
            _comp = (<Register onSwitchSignin={this.props.onSwitchSignin} onRegister={this.props.onRegister} />);
        }
        return _comp;
    }
}