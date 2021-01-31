import React, {useState} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import styled from 'styled-components'
import ItemsCarousel from 'react-items-carousel';
import Flip from 'react-reveal/Flip'
import {Link} from 'react-router-dom'

import {Underline, Text} from './Homepage'
import SingleEvent from './SingleEvent'
import MovingBackground from '../../reusable components/MovingBackground'

const ContainerFrame = styled.div`
    color: ${props => props.theme.primary};
    margin-top: 75px;
    height: 970px;
    position: relative;

    .events {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%)
    }

    .btn {
        display: flex;
        margin: 0 auto 25px auto;
        width: 50%;
        padding: .575rem 1rem;
        justify-content: center;
    }

    .events-container {
            svg {
                font-size: 22px;
            }
        }

    @media all and (min-width: 411px) {
        height: 990px;
    }  

    @media all and (min-width: 576px) {
        height: 1020px;
        
        .event-text {
            margin-bottom: 27px;
        }

        .events-container {
            svg {
                font-size: 27px;
            }
        }
    }

    @media all and (min-width: 992px) {
        margin-top: 100px;

        .header-container {
            max-width: 960px;
        }

        .btn {
            width: 40%;
        }

        .events-container {
            svg {
                font-size: 34px;
            }
        }
    }

    @media all and (min-width: 1200px) {
        .header-container {
            padding-top: 30px;
            max-width: 1140px;
        }

        .btn {
            width: 30%;
        }

        .events-container {
            svg {
                font-size: 39px;
            }
        }
    }

    @media all and (min-width: 1920px) {
        max-width: 1920px;
        margin: 100px auto 0 auto;

        .events-container {
            svg {
                font-size: 43px;
            }
        }
    }
`

export const Header = styled.h1`
    padding-top: 25px;
    font-weight: bold;
    font-size: 35px;
    text-align: center;
`

let cards = 1;

export default function Events() {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    if (window.screen.width >= 576 && window.screen.width < 992) {
        cards = 2
    } else if (window.screen.width >= 992 && window.screen.width < 1200) {
        cards = 3
    } else if (window.screen.width >= 1200) {
        cards = 4
    }

    return (
        <ContainerFrame>
            <MovingBackground>
                <Container fluid className="events">
                    <Row>
                        <Col xs={12} className="header-container mx-auto">
                            <Header>You think you know Oklahoma City?</Header>
                            <Underline />
                            <Text className="event-text">Leave your preconceived notions at the door and discover an Oklahoma City you may have had no idea existed. From beautiful weather to some of the best schools in America, there is more than meets the eye in OKC.
                            </Text>
                        </Col>
                        <Col xs={12} className="events-container">
                        <div style={{"padding":"40px 25px 70px 25px","maxWidth":1300,"margin":"0 auto"}}>
                            <ItemsCarousel
                                infiniteLoop={true}
                                gutter={12}
                                activePosition={'center'}
                                chevronWidth={60}
                                disableSwipe={false}
                                alwaysShowChevrons={false}
                                numberOfCards={cards}
                                slidesToScroll={1}
                                outsideChevron={true}
                                showSlither={false}
                                firstAndLastGutter={false}
                                activeItemIndex={activeItemIndex}
                                requestToChangeActive={value => setActiveItemIndex(value)}
                                leftChevron={<span class="iconify" data-icon="dashicons:arrow-left-alt2" data-inline="false"></span>}
                                rightChevron={<span class="iconify" data-icon="dashicons:arrow-right-alt2" data-inline="false"></span>}>
                                    <Flip bottom>
                                        <SingleEvent picNumber="2" />
                                    </Flip>
                                    <Flip bottom>
                                        <SingleEvent picNumber="5" />
                                    </Flip>
                                    <Flip bottom>
                                        <SingleEvent picNumber="6" />
                                    </Flip>
                                    <Flip bottom>
                                        <SingleEvent picNumber="7" />
                                    </Flip>
                                    <Flip bottom>
                                        <SingleEvent picNumber="8" />
                                    </Flip>
                                </ItemsCarousel>
                                </div>
                                <Link to="/events">
                                    <Button variant="outline-primary">See All Events</Button>
                                </Link>
                        </Col>
                    </Row>
                </Container>
            </MovingBackground>
        </ContainerFrame>
    )
}
