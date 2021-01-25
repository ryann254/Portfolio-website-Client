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
