import React from 'react';
import Container from 'react-bootstrap/Container';
import './App.css';

export default function OutputP(props) {
    return (
        <div>
            <Container>
                <div className="text-center ">
                    <p>Preview</p>
                    <div className="text-break text-left img-fluid" id="preview" dangerouslySetInnerHTML={props.text_output} />
                </div>
            </Container>

        </div>
    )
}


