import React from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

//Own Components
import { Text } from '../Homepage/Homepage'

const ContainerFrame = styled.div`
    margin-top: 50px;

    .btn {
        width: 100%;
        border-radius: 0;
    }
`

export default function ContactForm() {
    return (
        <ContainerFrame>
            <Container>
                <Row>
                    <Col>
                    <Text>We look forward to hearing from you. Fill out the form below and we will get back with you shortly.</Text>
                    <Form>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control required type="text" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control required type="email"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Phone</Form.Label>
                            <Form.Control required type="number"/>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Comments</Form.Label>
                            <Form.Control as="textarea" rows={4} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    </Col>
                </Row>
            </Container>
        </ContainerFrame>
    )
}
