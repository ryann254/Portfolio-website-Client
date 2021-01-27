import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


//Own Components
import {Header} from '../Homepage/Jobs'
import {Underline} from '../Homepage/Homepage'
import {EventHeader, Event} from '../Homepage/SingleEvent'
import {Date, Pointer} from '../Homepage/SingleNews'

const ContainerFrame = styled.div`
    background: #f6f6f6;
    
    .event {
        position: relative;
        margin: 30px 0;
    }
`

export default function index() {
    return (
        <ContainerFrame>
            <Container>
                <Row>
                    <Col xs={12} className="heading">
                        <Header className="text-center">Events</Header>
                        <Underline />
                    </Col>
                    <Col xs={12}>
                        <Event className="event">
                            <img src={`assets/events/event-1.jpg`} alt="events" className="img-fluid"/>
                            <Date className="pt-4 pl-4 pr-4">Jan 20, 2021</Date>
                            <EventHeader className="pt-4 pl-4 pr-4 pb-5">Gaze in awe at the world's largest Chihuly glass tower, catch an outdoor concert at a 17-acre park in the middle of downtown.</EventHeader>
                            <Link to={`/events-page`}><Pointer><i class="fa fa-arrow-right"></i></Pointer></Link>
                        </Event>
                    </Col>
                    <Col xs={12}>
                        <Event className="event">
                            <img src={`assets/events/event-2.jpg`} alt="events" className="img-fluid"/>
                            <Date className="pt-4 pl-4 pr-4">Jan 20, 2021</Date>
                            <EventHeader className="pt-4 pl-4 pr-4 pb-5">Gaze in awe at the world's largest Chihuly glass tower; catch an outdoor concert at a 17-acre park in the middle of downtown.</EventHeader>
                            <Link to={`/events-page`}><Pointer><i class="fa fa-arrow-right"></i></Pointer></Link>
                        </Event>
                    </Col>
                    <Col xs={12}>
                        <Event className="event">
                            <img src={`assets/events/event-3.jpg`} alt="events" className="img-fluid"/>
                            <Date className="pt-4 pl-4 pr-4">Jan 20, 2021</Date>
                            <EventHeader className="pt-4 pl-4 pr-4 pb-5">Gaze in awe at the world's largest Chihuly glass tower; catch an outdoor concert at a 17-acre park in the middle of downtown.</EventHeader>
                            <Link to={`/events-page`}><Pointer><i class="fa fa-arrow-right"></i></Pointer></Link>
                        </Event>
                    </Col>
                    <Col xs={12}>
                        <Event className="event">
                            <img src={`assets/events/event-4.jpg`} alt="events" className="img-fluid"/>
                            <Date className="pt-4 pl-4 pr-4">Jan 20, 2021</Date>
                            <EventHeader className="pt-4 pl-4 pr-4 pb-5">Gaze in awe at the world's largest Chihuly glass tower; catch an outdoor concert at a 17-acre park in the middle of downtown.</EventHeader>
                            <Link to={`/events-page`}><Pointer><i class="fa fa-arrow-right"></i></Pointer></Link>
                        </Event>
                    </Col>
                    <Col xs={12}>
                        <Event className="event">
                            <img src={`assets/events/event-5.jpg`} alt="events" className="img-fluid"/>
                            <Date className="pt-4 pl-4 pr-4">Jan 20, 2021</Date>
                            <EventHeader className="pt-4 pl-4 pr-4 pb-5">Gaze in awe at the world's largest Chihuly glass tower; catch an outdoor concert at a 17-acre park in the middle of downtown.</EventHeader>
                            <Link to={`/events-page`}><Pointer><i class="fa fa-arrow-right"></i></Pointer></Link>
                        </Event>
                    </Col>
                </Row>
            </Container> 
        </ContainerFrame>
    )
}
