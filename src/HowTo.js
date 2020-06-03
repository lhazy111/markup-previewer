import React, { useState } from 'react'
import { Button, Modal, Nav } from 'react-bootstrap'
import './App.css';

export default function HowTo() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const bgClass = document.body.classList.contains('night-mode') ? "night-mode" : null
    return (
        <>
            <Nav.Link onClick={handleShow}>
                Instruction
            </Nav.Link>

            <Modal show={show} onHide={handleClose} id="modal">
                <Modal.Header closeButton className={bgClass}>
                    <Modal.Title>Markup explained</Modal.Title>
                </Modal.Header>
                <Modal.Body className={bgClass}>
                    <div ># - Heading1</div>
                    <div>##  - Heading2</div>
                    <div>link - [link](https://www.freecodecamp.com)</div>
                    <div>code -  `code code`</div>
                    <div>```multi line code ```</div>
                    <div>- - list unordered</div>
                    <div>1. - list numbered</div>
                    <div>> - Block Quotes</div>
                    <div>**bold text**</div>
                    <div>image ![React Logo w/ Text](https://goo.gl/Umyytc)</div>
                </Modal.Body>
                <Modal.Footer className={bgClass}>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
          </Button>

                </Modal.Footer>
            </Modal>
        </>
    )
}
