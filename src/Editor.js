import React, { Component } from 'react';
import InputP from './InputP'
import OutputP from './OutputP';
import './App.css'
import marked from 'marked';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'




export class Editor extends Component {
    state = {
        text_input: "# Heading1 \n## Heading2 \n[link](https://www.freecodecamp.com) \ncode `<div></div>` \n```\nmulti \nline \ncode\n``` \n-lists\n-unordered \n1. and numbered\n1. aswell\n> Block Quotes!\n**bold text**\nand image ![React Logo w/ Text](https://goo.gl/Umyytc)"
    }

    handleChange = (e) => {
        this.setState({ text_input: e.target.value });
    }

    markdown = () => {
        let rawMarkup = marked(this.state.text_input, { breaks: true });
        return { __html: rawMarkup };
    }

    render() {
        return (
            <>

                <Container fluid id="editor-main">
                    <Row className="justify-content-center bg-secondary  shadow">
                        <h3 className=" text-light">Markup previewer</h3>
                    </Row>
                </Container>
                <Container>
                    <Row className="mt-4">
                        <Col md={6} className="shadow rounded p-3">
                            <InputP text_output={this.state} change={this.handleChange} />
                        </Col>
                        <Col md={6} className="shadow rounded p-3">
                            <OutputP text_output={this.markdown()} />
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default Editor
