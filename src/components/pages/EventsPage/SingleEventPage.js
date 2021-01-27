import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components'

//Own Components
import {Text} from '../Homepage/Homepage'


const ContainerFrame = styled.div`

`

export default function SingleEventPage() {
    return (
        <ContainerFrame>
            <Container>
                <Row>
                    <Col>
                        <img src="assets/events/event-2.jpg" alt="event" className="img-fluid"/>
                    </Col>
                    <Col xs={12}>
                        <Text>
                        Oklahoma City is a thriving metropolis with a low cost of living, short commute times, big-league quality of life and a diversified economy. Through multiple resident-led tax initiatives called MAPS, Oklahoma City is bursting with new development, bettering its infrastructure and schools and creating new quality-of-life additions to the city that are wowing longtime citizens and drawing attention
                        </Text>
                    </Col>
                </Row>
            </Container>
        </ContainerFrame>
    )
}
