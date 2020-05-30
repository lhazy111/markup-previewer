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
        text_input: `# This is header1\n## This is header2`

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

            <div className="Editor container-fluid">
                <Container fluid>
                    <Row className="justify-content-center bg-secondary rounded shadow mt-3">
                        <h3 className=" text-light">Markup previewer</h3>
                    </Row>
                    <Row className="mt-4">
                        <Col md={6} className="shadow rounded p-3">
                            <InputP text_output={this.state} change={this.handleChange} />
                        </Col>
                        <Col md={6} className="shadow rounded p-3">
                            <OutputP text_output={this.markdown()} />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Editor
