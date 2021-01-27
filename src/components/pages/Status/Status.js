import React from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//Own Components
import {Header} from '../Homepage/Events'
import {Underline} from '../Homepage/Homepage'
import SingleStatus from '../../common components/SingleStatusOrFAQ'

const ContainerFrame = styled.div`
    margin-top: 55px;

    @media all and (min-width: 576px) {
        margin-top: 140px;
    }

    @media all and (min-width: 768px) {
        margin-top: 180px;
    }

    @media all and (min-width: 992px) {
        margin-top: 270px;
    }

    @media all and (min-width: 1200px) {
        margin-top: 370px;
    }
`

const headingStatus = 'Status'
const statusAnswers = [
    'Session 0: Introduction to Entrepreneurship',
    'Session 1: Idea Validation',
    'Session 2: B-Model Building & Validation',
    'Session 3: Team Building'
]

export default function Status() {
    return (
        <ContainerFrame>
            <Container>
                <Row>
                    <Col>
                        <Header className="text-center">{headingStatus}</Header>
                        <Underline />
                        {statusAnswers.length !== 0 ? statusAnswers.map(item => (
                            <SingleStatus questionOrStatus={item} key={item}/>
                        )): null}
                    </Col>
                </Row>
            </Container>
        </ContainerFrame>
    )
}
