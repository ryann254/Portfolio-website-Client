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
import Jobs from './Jobs'
import Events from './Events'
import News from './News'
import Members from './Members'


const ContainerFrame = styled.div`
    margin-top: 55px;
`

const LandingSectionHeader = styled.h2`
    text-align: center;
    font-weight: bold;
`

export const Underline = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 40px;
    height: 3px;
    background: #3494E6;
`

export const Text = styled.p`
    margin-top: 30px;
    font-size: 15px;
`

const Email = styled.div`
    position: relative;
    margin: 65px 0;
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
                        <Text>Oklahoma City is a thriving metropolis with a low cost of living, short commute times, big-league quality of life and a diversified economy. Through multiple resident-led tax initiatives called MAPS, Oklahoma City is bursting with new development, bettering its infrastructure and schools and creating new quality-of-life additions to the city that are wowing longtime citizens and drawing attention and visitors from around the country.
                        <br />
                        <br />
                        With thrilling sports action, world-class museums, entertainment, shopping and dining at more than a dozen different districts, the energy to continue to grow, build and create is pumping all around town.
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
            {/* Rest of the components */}
            <Jobs />
            <Events />
            <News />
            <Members />
        </ContainerFrame>
    )
}

export default Homepage;