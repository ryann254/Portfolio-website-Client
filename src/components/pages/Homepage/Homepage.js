import React from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/fall-animation.css';

//Own Components
import MovingBackground from '../../reusable components/MovingBackground'
import EmbededVideo from './EmbededVideo'
import Jobs from './Jobs'
import Events from './Events'
import News from './News'
import Members from './Members'

const AutoplaySlider = withAutoplay(AwesomeSlider)

const ContainerFrame = styled.div`
    margin-top: 115px;

    @media all and (min-width: 411px) {
        margin-top: 145px;

        .upper-text, .lower-text {
            padding: 0 10px;
        }

        p {
            font-size: 16px;
        }
    }

    @media all and (min-width: 576px) {
        margin-top: 150px;

        .input-group {
            top: 90%;
            transform: translate(-50%, -10%);
            width: 80% !important;
        }
    }

    @media all and (min-width: 768px) {
        margin-top: 170px;

        .input-group {
            width: 65% !important;
        }
    }

    @media all and (min-width: 992px) {
        margin-top: 210px;
    }

    @media all and (min-width: 1440px) {
        margin-top: 250px;
    }
`

const LandingSectionHeader = styled.h1`
    text-align: center;
    font-weight: bold;

    @media all and (min-width: 992px) {
        font-size: 2.7rem;
    } 
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

    @media all and (min-width: 576px) {
        margin-top: 40px;
    }

    @media all and (min-width: 768px) {
        font-size: 16px;
    }
`

const Email = styled.div`
    position: relative;
    margin: 75px 0;
    border-radius: 5px;
    background: ${props => props.theme.darkColor};
    padding: 25px 0;
    color: ${props => props.theme.primary};
    text-align: center;

    .upper-text {
        font-size: 22px;
        font-weight: bold;
        margin-bottom: 10px;
    }

    .lower-text {
        font-size: 16px;
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

    @media all and (min-width: 576px) {
        margin: 95px 0;
    }

    @media all and (min-width: 1200px) {
        margin: 115px 0;
    }
`

const Landing = styled.div`
    background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
    position: relative;
    height: 214px;

    @media all and (min-width: 576px) {
        height: 300px;
    }
    @media all and (min-width: 768px) {
        height: 390px;
    }
    @media all and (min-width: 992px) {
        height: 510px;
    }
    @media all and (min-width: 1200px) {
        height: 630px;
    }
    @media all and (min-width: 1440px) {
        height: 700px;
    }
    @media all and (min-width: 1920px) {
        max-width: 1920px;
        margin: 0 auto;
    }

    @media all and (min-width: 1920px) {
        max-width: 1920px;
        margin: 0 auto;
    }
`

const Img = styled.div`
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -45%);
    width: 90%;
    display: flex;
    margin-left: auto;
    margin-right: auto;

    .awssld {
        --organic-arrow-thickness: 7px;
        --organic-arrow-color: #f46b34;
        --organic-arrow-thickness: 6px;
        --control-button-opacity: 0.85;
        --control-button-hover-opacity: 1;     
        --control-bullet-color: #f46b34;
        --control-bullet-active-color: #cf5b2c;
    }

    img {
        animation: zoom 5000ms linear infinite;
    }

    @keyframes zoom {
        0% { 
            transform: scale(1.01);
        }
        25% {
            transform: scale(1.03);
        }
        50% {
            transform: scale(1.05);
        }
        75% {
            transform: scale(1.07);
        }
        100% {
            transform: scale(1.09);
        }
    }


    @media all and (min-width: 411px) {
        top: 57%;
        left: 50%;
        transform: translate(-50%, -43%);
    }
     
    @media all and (min-width: 768px) {
        top: 56%;
        left: 50%;
        transform: translate(-50%, -44%);
    }

    @media all and (min-width: 992px) {
        top: 56%;
        left: 50%;
        transform: translate(-50%, -44%);
    }

    @media all and (min-width: 1200px) {
        top: 55%;
        left: 50%;
        transform: translate(-50%, -45%);
    }

    @media all and (min-width: 1440px) {
        width: 88%;
        height: 800px !important;
    }

    @media all and (min-width: 1920px) {
        width: 85%;
    }
`

function Homepage() {
    return (
        <>
        <Landing>
            <MovingBackground title={''}>
                <Img>
                    <AutoplaySlider 
                        play={true}
                        cancelOnInteraction={false} // should stop playing on user interaction
                        interval={5000}
                        animation="fallAnimation">
                            <div data-src="assets/bg-images/bg-3.webp" />
                            <div data-src="assets/bg-images/bg-2.webp" />
                            <div data-src="assets/bg-images/bg-4.webp" />
                    </AutoplaySlider>
                </Img>
            </MovingBackground>
        </Landing>
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
                    </Col>
                </Row>
            </Container>
            {/* Rest of the components */}
            {/* Embeded Youtube Video */}
            <EmbededVideo />
            <Jobs />
            <Events />
            <News />
            <Members />
        </ContainerFrame>
        </>
    )
}

export default Homepage;