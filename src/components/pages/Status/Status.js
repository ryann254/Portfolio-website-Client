import React from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//Own Components
import {Header} from '../Homepage/Events'
import {Underline} from '../Homepage/Homepage'
import SingleStatus from '../../reusable components/SingleStatusOrFAQ'

const ContainerFrame = styled.div`
    margin-top: 95px;

    @media all and (min-width: 411px) {
        margin-top: 130px;
    }

    @media all and (min-width: 576px) {
        margin-top: 110px;
    }

    @media all and (min-width: 768px) {
        margin-top: 140px;
    }

    @media all and (min-width: 992px) {
        margin-top: 170px;
    }

    @media all and (min-width: 1440px) {
        margin-top: 220px;
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
