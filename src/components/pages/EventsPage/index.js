import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components'


//Own Components
import {EventHeader, Event} from '../Homepage/SingleEvent'
import {Date, Pointer} from '../Homepage/SingleNews'

const ContainerFrame = styled.div`
    background: #f6f6f6;
    margin-top: 50px;
    
    .event {
        position: relative;
        margin: 50px 0;
    }
 
    @media all and (min-width: 576px) {
        .event {
            margin-top: 40px;
        }
    }

    @media all and (min-width: 768px) {
        .heading {
            margin-bottom: 50px;
        }
    }

    @media all and (min-width: 992px) {
        .events-container {
            max-width: 960px;
        }
    }

    @media all and (min-width: 1200px) {
        .events-container {
            max-width: 1140px;
        }
    }
`

export default function index() {
    return (
        <ContainerFrame>
            <Container fluid className="events-container">
                <Row>
                    <Col xs={12} className="heading"></Col>
                    <Col xs={12} md={6} lg={4}>
                        <Event className="event">
                            <img src={`assets/events/event-1.webp`} alt="events" className="img-fluid"/>
                            <Date className="pt-4 pl-4 pr-4">Jan 20, 2021</Date>
                            <EventHeader className="pt-4 pl-4 pr-4 pb-5">Gaze in awe at the world's largest Chihuly glass tower, catch an outdoor concert at a 17-acre park in the middle of downtown.</EventHeader>
                            <Pointer to="/events-page"><i class="fa fa-arrow-right"></i></Pointer>
                        </Event>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <Event className="event">
                            <img src={`assets/events/event-9.webp`} alt="events" className="img-fluid"/>
                            <Date className="pt-4 pl-4 pr-4">Jan 20, 2021</Date>
                            <EventHeader className="pt-4 pl-4 pr-4 pb-5">Gaze in awe at the world's largest Chihuly glass tower; catch an outdoor concert at a 17-acre park in the middle of downtown.</EventHeader>
                            <Pointer to="/events-page"><i class="fa fa-arrow-right"></i></Pointer>
                        </Event>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <Event className="event">
                            <img src={`assets/events/event-7.webp`} alt="events" className="img-fluid"/>
                            <Date className="pt-4 pl-4 pr-4">Jan 20, 2021</Date>
                            <EventHeader className="pt-4 pl-4 pr-4 pb-5">Gaze in awe at the world's largest Chihuly glass tower; catch an outdoor concert at a 17-acre park in the middle of downtown.</EventHeader>
                            <Pointer to="/events-page"><i class="fa fa-arrow-right"></i></Pointer>
                        </Event>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <Event className="event">
                            <img src={`assets/events/event-8.webp`} alt="events" className="img-fluid"/>
                            <Date className="pt-4 pl-4 pr-4">Jan 20, 2021</Date>
                            <EventHeader className="pt-4 pl-4 pr-4 pb-5">Gaze in awe at the world's largest Chihuly glass tower; catch an outdoor concert at a 17-acre park in the middle of downtown.</EventHeader>
                            <Pointer to="/events-page"><i class="fa fa-arrow-right"></i></Pointer>
                        </Event>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <Event className="event">
                            <img src={`assets/events/event-5.webp`} alt="events" className="img-fluid"/>
                            <Date className="pt-4 pl-4 pr-4">Jan 20, 2021</Date>
                            <EventHeader className="pt-4 pl-4 pr-4 pb-5">Gaze in awe at the world's largest Chihuly glass tower; catch an outdoor concert at a 17-acre park in the middle of downtown.</EventHeader>
                            <Pointer to="/events-page"><i class="fa fa-arrow-right"></i></Pointer>
                        </Event>
                    </Col>
                </Row>
            </Container> 
        </ContainerFrame>
    )
}
