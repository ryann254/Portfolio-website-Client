import React from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Fade from 'react-reveal/Fade'

//Own Components
import {Header} from './Events'
import {Underline} from './Homepage'
import SingleMember from './SingleMember'

const ContainerFrame = styled.div`
    margin-top: 35px;
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
                            <SingleMember picNumber="1" index={1}/>
                        </Fade>
                        <Fade bottom>   
                            <SingleMember picNumber="3" index={2}/>
                        </Fade>
                        <Fade bottom>
                            <SingleMember picNumber="4" index={3}/>
                        </Fade>
                    </Col>
                </Row>
            </Container>
        </ContainerFrame>
    )
}