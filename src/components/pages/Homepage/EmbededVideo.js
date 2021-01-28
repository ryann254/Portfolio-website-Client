import React from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ContainerFrame = styled.div`
    background: ${props => props.theme.darkColor};
    color: ${props => props.theme.primary};

    .iframe-container {
        padding: 40px 0;
        margin-left: auto;
        margin-right: auto;
    }

    @media all and (min-width: 768px) {
        .iframe-container {
            max-width: 720px;
        }
    }

    /* @media all and (min-width: 992px) {
        .iframe-container {
            max-width: 960px;
            padding: 60px 0;
        }
    } */

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
            <Container fluid>
                <Row>
                    <Col className="iframe-container">
                        <IframeContainer>
                            <iframe title="welcome-video" width="560" height="315" src="https://www.youtube.com/embed/cxmOmGiOipI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </IframeContainer>
                    </Col>
                </Row>
            </Container>
        </ContainerFrame>
    )
}
