import React from "react";
import {
    Form, FormControl, FormGroup,
    Col, Button, ControlLabel,
    InputGroup, Glyphicon, Checkbox
} from "react-bootstrap";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Form style={{ padding: "20%" }} horizontal>
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

                <FormGroup bsSize="small">
                    <Col sm={10}>
                        <Checkbox>Remember me</Checkbox>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col style={{ textAlign: "right" }} sm={10}>
                        <Button bsStyle="link" onClick={(e) => {
                            this.props.onSubmit();
                        }}
                        >Register</Button>
                        <Button bsStyle="success" bsSize="small" type="button" onClick={(e) => { console.log(e.target); }}>
                            Sign in
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
};