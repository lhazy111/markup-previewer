import React from 'react'
import Container from 'react-bootstrap/Container'


export default function InputP(props) {
    return (
        <div>
            <Container className="text-center">
                <div className="form-group">
                    <label>Editor</label>
                    <textarea
                        className="form-control"
                        id="editor"
                        rows="20"
                        onChange={props.change}
                        value={props.text_output}
                    >
                    </textarea>
                </div>
            </Container>
        </div>
    )
}


