import React from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Fade from 'react-reveal/Fade'

//Own Components
import {Header} from './Events'
import {Underline, Text} from './Homepage'
import SingleMember from './SingleMember'

const ContainerFrame = styled.div`
    background: #f6f6f6;
`

export default function Members() {
    return (
        <ContainerFrame>
            <Container>
                <Row>
                    <Col>
                        <Header className="text-center">Members</Header>
                        <Underline />
                        <Fade bottom>
                            <SingleMember picNumber="1" />
                        </Fade>
                        <Fade bottom>   
                            <SingleMember picNumber="3" />
                        </Fade>
                        <Fade bottom>
                            <SingleMember picNumber="4" />
                        </Fade>
                    </Col>
                </Row>
            </Container>
        </ContainerFrame>
    )
}