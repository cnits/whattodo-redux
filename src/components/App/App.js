import React from "react";
import Auth from "./../Auth"

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillDidMount() {

    }
    render() {
        return (
            <Auth type="REGISTER" />
        );
    }
};