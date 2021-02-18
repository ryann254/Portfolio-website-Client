import React from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//Own Components
import SingleStatus from '../../reusable components/SingleStatusOrFAQ'

const ContainerFrame = styled.div`
    margin-top: 50px;
`

const statusAnswers = [
    'Session 0: Introduction to Entrepreneurship',
    'Session 1: Idea Validation',
    'Session 2: B-Model Building & Validation',
    'Session 3: Team Building'
]

const Answers = [
    'Answer to status one',
    'Answer to status two',
    'Answer to status three',
    'Answer to status four'
]

export default function Status() {
    return (
        <ContainerFrame>
            <Container>
                <Row>
                    <Col>
                        {statusAnswers.length !== 0 ? statusAnswers.map((item, index) => (
                            <SingleStatus questionOrStatus={item} key={item} index={index} answers={Answers}/>
                        )): null}
                    </Col>
                </Row>
            </Container>
        </ContainerFrame>
    )
}
