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

const ContainerFrame = styled.div`
    background: ${props => props.theme.darkColor};
    color: ${props => props.theme.primary};
    margin-top: 55px;

    .btn {
        display: flex;
        margin: 0 auto 25px auto;
        width: 50%;
        padding: .575rem 1rem;
        justify-content: center;
    }

    @media all and (min-width: 576px) {
        .event-text {
            margin-bottom: 27px;
        }
    }

    @media all and (min-width: 992px) {
        .events-container {
            max-width: 960px;
        }
    }

    @media all and (min-width: 1200px) {
        .events-container {
            max-width: 1140px;
        }
    }

    @media all and (min-width: 1920px) {
        max-width: 1920px;
        margin: 0 auto;
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
    if (window.screen.width >= 576 && window.screen.width < 768) {
        cards = 2
    }

    return (
        <ContainerFrame>
            <Container fluid className="events-container">
                <Row>
                    <Col>
                        <Header>You think you know Oklahoma City?</Header>
                        <Underline />
                        <Text className="event-text">Leave your preconceived notions at the door and discover an Oklahoma City you may have had no idea existed. From beautiful weather to some of the best schools in America, there is more than meets the eye in OKC.
                        </Text>
                        <div style={{"padding":"0 25px 70px 25px","maxWidth":800,"margin":"0 auto"}}>
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
                            rightChevron={'>'}
                            leftChevron={'<'}>
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
        </ContainerFrame>
    )
}
