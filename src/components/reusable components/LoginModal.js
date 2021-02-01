import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'


export default function LoginModal({show, onHide}) {
    return (
        <>    
            <Modal show={show} onHide={onHide} centered size="md">
                <Modal.Header closeButton>
                    <Modal.Title>Please fill in your details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Control type="email" required placeholder="Your Email..." />
                        </Form.Group>

                        <Form.Group>
                            <Form.Control type="password" required placeholder="Your Password..." />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="d-flex mt-5 mx-auto">
                            Login
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
      </>
    )
}
