import React from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//Own Components
import SingleStatus from '../../reusable components/SingleStatusOrFAQ'

const FAQAnswers = [
    'How do I apply ?',
    'Why can\'t I sign in ?',
    'How do I get a reference ?',
    'How do I get a reference ?'
]

const Answers = [
    'Answer to question one',
    'Answer to question two',
    'Answer to question three',
    'Answer to question four'
]

const ContainerFrame = styled.div`
    margin-top: 50px;
`

export default function Status() {
    return (
        <ContainerFrame>
            <Container>
                <Row>
                    <Col>
                        {FAQAnswers.length !== 0 ? FAQAnswers.map((item, index) => (
                            <SingleStatus questionOrStatus={item} key={item} index={index} answers={Answers}/>
                        )): null}
                    </Col>
                </Row>
            </Container>
        </ContainerFrame>
    )
}
