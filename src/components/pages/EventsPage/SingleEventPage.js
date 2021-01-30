import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components'

//Own Components
import {Underline,Text} from '../Homepage/Homepage'
import {Header} from '../Homepage/Jobs'


const ContainerFrame = styled.div`
    margin-top: 50px;

    .text-container {
        margin-top: 20px;
        background: #f6f6f6;
    }

    .heading {
        margin-bottom: 40px;
    }

    @media all and (min-width: 411px) {
        margin-top: 90px;
    }


    @media all and (min-width: 576px) {
        margin-top: 60px;

        .heading {
            margin-bottom: 40px;
        }
    }

    @media all and (min-width: 768px) {
        margin-top: 80px;

        .heading {
            margin-bottom: 50px;
        }

        .event-image {
            width: 690px;
        }
    }

    @media all and (min-width: 992px) {
        margin-top: 110px;
    }

    @media all and (min-width: 1440px) {
        margin-top: 160px;
    }
`

export default function SingleEventPage() {
    return (
        <ContainerFrame>
            <Container>
                <Row>
                    <Col xs={12} className="heading">
                        <Header className="text-center">Events</Header>
                        <Underline />
                    </Col>
                    <Col>
                        <img src="assets/events/event-2.webp" alt="event" className="img-fluid event-image"/>
                    </Col>
                    <Col xs={12} className="text-container">
                        <Text>
                        Oklahoma City is a thriving metropolis with a low cost of living, short commute times, big-league quality of life and a diversified economy. Through multiple resident-led tax initiatives called MAPS, Oklahoma City is bursting with new development, bettering its infrastructure and schools and creating new quality-of-life additions to the city that are wowing longtime citizens and drawing attention
                        </Text>
                    </Col>
                </Row>
            </Container>
        </ContainerFrame>
    )
}
