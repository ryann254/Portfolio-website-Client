import React from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

//Own Components
import EmbededVideo from './EmbededVideo'


const ContainerFrame = styled.div`
    margin-top: 40px;
`

const LandingSectionHeader = styled.h2`
    text-align: center;
    font-weight: bold;
`

const Underline = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 40px;
    height: 3px;
    background: #3494E6;
`

const Text = styled.p`
    margin-top: 30px;
    font-size: 15px;
`

const Email = styled.div`
    position: relative;
    margin: 50px 0;
    border-radius: 5px;
    background: ${props => props.theme.darkColor};
    padding: 25px 0;
    color: ${props => props.theme.primary};
    text-align: center;

    .upper-text {
        font-size: 22px;
        font-weight: bold;
    }

    .lower-text {
        font-size: 15px;
        margin-bottom: 25px;
    }

    .input-group {
        position: absolute;
        top: 88%;
        left: 50%;
        transform: translate(-50%, -12%);
        width: 90%;

        .form-control, .btn {
            border-radius: 0 !important;
        }
    }
`

function Homepage() {
    return (
        <ContainerFrame>
            <Container>
                <Row>
                    <Col>
                        <LandingSectionHeader>Welcome to My Donation Website</LandingSectionHeader>
                        <Underline />
                        <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        <br/>
                        <br/>
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Text>

                        <Email>
                            <div className="upper-text">Want more info about my Donation Website?</div>
                            <div className="lower-text">Enter your email below to get a Welcome Guide, sign up for our blog and more</div>
                            <InputGroup>
                                <FormControl
                                    placeholder="Email Address..."
                                />
                                <InputGroup.Append>
                                <Button variant="primary">Go</Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </Email>
                        {/* Embeded Youtube Video */}
                        <EmbededVideo />
                    </Col>
                </Row>
            </Container>
        </ContainerFrame>
    )
}

export default Homepage;