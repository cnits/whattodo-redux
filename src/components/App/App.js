import React from "react";
import Auth from "./../Auth";
import { AuthStates } from "./../../core/constants";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authState: props.authState || AuthStates.SIGNIN
        }
    }
    componentWillDidMount() {

    }
    render() {
        return (
            <Auth state={this.state.authState} />
        );
    }
};