import React, {useState} from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

//Own Components
import { Text } from '../Homepage/Homepage'
import notify from '../../../helpers/Notify'

const ContainerFrame = styled.div`
    margin-top: 50px;

    .btn {
        width: 100%;
        border-radius: 0;
    }
`

export default function ContactForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [comments, setComments] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        
        let data = {
            name,
            email,
            phone,
            comments
        }
        //Preparing the data for sending
        let form_data = new FormData();
        for (let key in data) {
        form_data.append(key, data[key]);
        }

        //Sending
        const xhr = new XMLHttpRequest();
        let action="https://formspree.io/f/mjvpzlvv" 
        let method="POST"
        xhr.open(method, action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            setName('')
            setEmail('')
            setComments('')
            notify('success', 'Form submission was successful')
        } else {
            notify('error', 'Form submission failed, kindly check your internet connection and try again')
        }
        };
        xhr.send(form_data);
    }
    return (
        <ContainerFrame>
            <Container>
                <Row>
                    <Col>
                    <Text>We look forward to hearing from you. Fill out the form below and we will get back with you shortly.</Text>
                    <Form>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control required type="text" value={name} onChange={(e) => setName(e.target.value)} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control required type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Phone</Form.Label>
                            <Form.Control required type="number" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Comments</Form.Label>
                            <Form.Control as="textarea" rows={4} value={comments} onChange={(e) => setComments(e.target.value)} />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={handleSubmit}>
                            Submit
                        </Button>
                    </Form>
                    </Col>
                </Row>
            </Container>
        </ContainerFrame>
    )
}
