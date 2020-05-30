import React, { Component } from 'react'
import './App.css';
import { Navbar, Nav, Form } from 'react-bootstrap'

export class Navbar01 extends Component {
    handleClick(e) {
        console.log('clicked switch')
        document.body.classList.toggle('night-mode');
        document.getElementById('editor').classList.toggle('night-mode');
    }
    render() {
        return (
            <Navbar expand="lg" id="navbar" bg="dark" variant="dark">
                <Navbar.Brand href="#home">&lt;_Lou/&gt;</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <Form className="d-flex">
                            <Form.Check
                                onClick={this.handleClick}
                                type="switch"
                                id="custom-switch"
                                label="Day/Night"
                                className="align-self-center text-light"
                            />
                        </Form>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navbar01
