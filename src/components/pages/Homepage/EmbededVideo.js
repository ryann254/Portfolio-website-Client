import React from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MovingBackground from '../../reusable components/MovingBackground'

const ContainerFrame = styled.div`
    position: relative;
    color: ${props => props.theme.primary};
    height: 300px;

    .iframe-container {
        padding: 40px 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%)
    }

    @media all and (min-width: 411px) {
        height: 330px;
    }

    
    @media all and (min-width: 576px) {
        height: 400px;
    }

    @media all and (min-width: 768px) {
        height: 520px;

        .iframe-container {
            max-width: 720px;
        }
    }

    @media all and (min-width: 1200px) {
        height: 560px;
    }

    @media all and (min-width: 1920px) {
        max-width: 1920px;
    }
`

const IframeContainer = styled.div`
    position: relative;
    width: 100%;
    padding-bottom: 56.25%; 
    height: 0;

    iframe {
        position: absolute;
        top:0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`

export default function EmbededVideo() {
    return (
            <ContainerFrame>
                <MovingBackground>
                <Container fluid>
                    <Row>
                        <Col className="iframe-container">
                            <IframeContainer>
                                <iframe title="welcome-video" width="560" height="315" src="https://www.youtube.com/embed/cxmOmGiOipI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </IframeContainer>
                        </Col>
                    </Row>
                </Container>
                </MovingBackground>
            </ContainerFrame>
    )
}
