import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components'


//Own Components
import {Header} from '../Homepage/Jobs'
import {Underline, Text} from '../Homepage/Homepage'

const ContainerFrame = styled.div`
    background: #f6f6f6;

    .jobs-image {
        margin-top: 45px
    }

    .col-12 {
        background: ${props => props.theme.primary};
    }
`

export default function index() {
    return (
        <ContainerFrame>
            <Container>
                <Row>
                    <Col xs={12} className="heading">
                        <Header className="text-center">Jobs</Header>
                        <Underline />
                    </Col>
                    <Col xs={12}>
                        <img src={`assets/jobs/job-2.jpg`} alt="events" className="img-fluid jobs-image"/>
                    </Col>
                    <Col xs={12}>
                        <Text>Gaze in awe at the world's largest Chihuly glass tower, catch an outdoor concert at a 17-acre park in the middle of downtown.</Text>
                    </Col>
                </Row>
            </Container> 
        </ContainerFrame>
    )
}
