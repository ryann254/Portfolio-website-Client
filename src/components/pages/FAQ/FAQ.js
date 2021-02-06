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

const ContainerFrame = styled.div`
    margin-top: 50px;
`

export default function Status() {
    return (
        <ContainerFrame>
            <Container>
                <Row>
                    <Col>
                        {FAQAnswers.length !== 0 ? FAQAnswers.map(item => (
                            <SingleStatus questionOrStatus={item} key={item}/>
                        )): null}
                    </Col>
                </Row>
            </Container>
        </ContainerFrame>
    )
}
