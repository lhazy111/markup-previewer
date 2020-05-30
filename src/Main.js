import React, { Component } from 'react';
import Navbar01 from './Navbar01';
import Editor from './Editor';
import Container from 'react-bootstrap/Container'
import './App.css';


export class Main extends Component {
    render() {
        return (
            <div className="Main">
                <Navbar01 />
                <Container fluid>
                    <Editor />
                </Container>

            </div>
        )
    }
}

export default Main
