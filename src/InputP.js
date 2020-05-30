import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'


export class InputP extends Component {

    render() {
        return (
            <div>
                <Container className="text-center">
                    <div className="form-group">
                        <label for="editor">Editor</label>
                        <textarea className="form-control" id="editor" rows="20" onChange={this.props.change}>{this.props.text_output.text_input}</textarea>
                    </div>
                </Container>

            </div>
        )
    }
}

export default InputP
