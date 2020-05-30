import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import './App.css';

export class OutputP extends Component {
    render() {
        return (
            <div>
                <Container>
                    <div className="text-center ">
                        <label for="preview">Preview</label>
                        <div className="text-break text-left img-fluid" id="preview" dangerouslySetInnerHTML={this.props.text_output} />
                    </div>
                </Container>

            </div>
        )
    }
}

export default OutputP
