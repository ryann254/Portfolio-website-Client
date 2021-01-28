import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components'

//Own Components
import {Underline,Text} from '../Homepage/Homepage'
import {Header} from '../Homepage/Jobs'


const ContainerFrame = styled.div`
    .text-container {
        margin-top: 20px;
        background: #f6f6f6;
    }

    @media all and (min-width: 576px) {
        margin-top: 90px;

        .heading {
            margin-bottom: 40px;
        }
    }

    @media all and (min-width: 768px) {
        margin-top: 110px;

        .heading {
            margin-bottom: 50px;
        }

        .event-image {
            width: 690px;
        }
    }

    @media all and (min-width: 992px) {
        margin-top: 150px;
    }
`

export default function index() {
    return (
        <ContainerFrame>
            <Container>
                <Row>
                    <Col xs={12} className="heading">
                        <Header className="text-center">News</Header>
                        <Underline />
                    </Col>
                    <Col>
                        <img src="assets/jobs/job-1.webp" alt="event" className="img-fluid event-image"/>
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
