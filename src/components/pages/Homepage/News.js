import React from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Flip from 'react-reveal/Flip'

//Own Components
import {Header} from './Events'
import {Underline, Text} from './Homepage'
import SingleNews from './SingleNews'

const ContainerFrame = styled.div`
    background: #f6f6f6;
    padding-top: 45px;

    .btn {
        display: flex;
        margin: 50px auto 50px auto;
        border-radius: 0;
        padding: .375rem 1.6rem;
    }
`

export default function News() {
    return (
        <ContainerFrame>
            <Container>
                <Row>
                    <Col>
                        <Header className="text-center">News</Header>
                        <Underline />
                        <Text>
                            We aren’t the only ones talking about how Oklahoma City is the perfect place to live, work and play. See what others are saying about your next hometown.
                        </Text>
                        <Flip bottom>
                            <SingleNews picNumber="1" />
                        </Flip>
                        <Flip bottom>
                            <SingleNews picNumber="2" />
                        </Flip>
                        <Flip bottom>
                            <SingleNews picNumber="3" />
                        </Flip>
                        <Button variant="primary">See All News</Button>
                    </Col>
                </Row>
            </Container>
        </ContainerFrame>
    )
}