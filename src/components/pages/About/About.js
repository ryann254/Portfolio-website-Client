import React from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//Own Components
import {EventHeader} from '../Homepage/SingleEvent'
import {Underline, Text} from '../Homepage/Homepage'

const ContainerFrame = styled.div`
    .heading {
        margin-top: 50px;
        margin-bottom: 20px;
    }

    .smaller-header {
        margin: 40px 0 10px 0; 
        text-align: center;
    }

    @media all and (min-width: 411px) {
        .heading {
            margin-top: 90px;
        }
    }

    @media all and (min-width: 576px) {
        .heading {
            margin-top: 50px;
        }

        .about-underline {
            margin-bottom: 20px;
        }
    }

    @media all and (min-width: 768px) {
        .heading {
            margin-bottom: 50px;
        }

        .smaller-header {
            margin-top: 0px; 
            text-align: center;
        }

        .about-image {
            position: relative;
            top: 50%;
            transform: translateY(-50%)
        }
    }

    @media all and (min-width: 992px) {
        .heading {
            margin-top: 80px;
        }
    }
`

export default function About() {
    return (
        <ContainerFrame>
            <Container>
                <Row>
                    <Col xs={12} className="heading"></Col>
                    <Col xs={12} md={6}>
                        <img src="assets/events/event-7.webp" alt="events" className="img-fluid about-image"/>
                    </Col>
                    <Col xs={12} md={6}>
                        <EventHeader className="smaller-header">Abundant opportunity</EventHeader>
                        <Underline />
                        <Text>Oklahoma City has everything a prospective employee could want: OKC is thriving under a strong economic climate, diverse industries and low tax rates, which give our businesses the opportunity to grow and expand. And this means, in turn, there are great job opportunities for you.

                        The success of our region's economy and a stable unemployment rate did not happen overnight. For years, Oklahoma City has worked for widespread quality of life improvements and self-investment. The massive scale of our public improvement projects.
                        </Text>
                    </Col>
                </Row>
            </Container>
        </ContainerFrame>
    )
}
