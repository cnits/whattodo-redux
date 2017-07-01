import React from "react";
import {
    Form, FormControl, FormGroup,
    Col, Button, ControlLabel,
    InputGroup, Glyphicon
} from "react-bootstrap";

export default class Register extends React.Component {
    render() {
        return (
            <Form style={{ padding: "20%" }} autoComplete="off" horizontal>
                <FormGroup bsSize="small" controlId="formHorizontalEmail">
                    <Col sm={10}>
                        <InputGroup>
                            <InputGroup.Addon>
                                <Glyphicon glyph="envelope" />
                            </InputGroup.Addon>
                            <FormControl type="email" placeholder="Email" />
                        </InputGroup>
                    </Col>
                </FormGroup>

                <FormGroup bsSize="small" controlId="formHorizontalPassword">
                    <Col sm={10}>
                        <InputGroup>
                            <InputGroup.Addon>
                                <Glyphicon glyph="lock" />
                            </InputGroup.Addon>
                            <FormControl type="password" placeholder="Password" />
                        </InputGroup>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col style={{ textAlign: "right" }} sm={10}>
                        <Button bsStyle="link">Login</Button>
                        <Button bsStyle="success" bsSize="small" type="button" onClick={(e) => { console.log("Register", e.target); }}>
                            Register
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
};