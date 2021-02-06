import React, {useEffect, useState} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components'
import {useDispatch, useSelector} from 'react-redux'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

//Own Components
import {Text} from '../Homepage/Homepage'
import Api from '../../../services/network'
import {AddUser} from '../../../redux/action-creator/AuthActionCreator'

const AutoplaySlider = withAutoplay(AwesomeSlider)

const ContainerFrame = styled.div`
    margin-top: 80px;

    .text-container {
        margin-top: 90px;
        background: #f6f6f6;
    }

    .awssld {
        --organic-arrow-thickness: 5px;
        --organic-arrow-color: #f46b34;
        --organic-arrow-thickness: 6px;
        --control-button-opacity: 0.85;
        --control-button-hover-opacity: 1;     
        --control-bullet-color: #f46b34;
        --control-bullet-active-color: #cf5b2c;
    }


    @media all and (min-width: 768px) {
        .event-image {
            width: 690px;
        }
    }

`

export default function SingleEventPage() {
    const dispatch = useDispatch()
    const [pictures, setPictures] = useState([])
    const {viewEvent, updateCount} = useSelector(state => state.events)
    const api = new Api()

    useEffect(() => {
        //Checking whether the user is logged in
        checkAuth()
        
        convertToArray()
        // eslint-disable-next-line
    }, [updateCount, viewEvent])

    function checkAuth() {
        const userId = localStorage.getItem('currentUser')

        if (userId !== null && userId !== '') {
            api.Users().getUser(userId)
            .then(res => {
                if (res.status === 200) {
                    dispatch(AddUser(res.data))
                }
            })
            .catch(err => {
                if (err.response) {
                    const {message} = err.response.data
                    console.log(message)
                } else {
                    console.log(err)
                }
            })
        }
    }

    const convertToArray = () => {
        const newArray = viewEvent.picture.split(',')
        setPictures(newArray)
    }
    return (
        <ContainerFrame>
            <Container>
                <Row>
                    <Col xs={12} className="heading"></Col>
                    <Col>
                        <AutoplaySlider 
                            play={true}
                            cancelOnInteraction={false} // should stop playing on user interaction
                            interval={5000}
                            animation="fallAnimation">
                                {pictures.length !== 0 ? pictures.map(pic => (
                                    <div data-src={pic} />
                                )): null}
                        </AutoplaySlider>
                    </Col>
                    <Col xs={12} className="text-container">
                        <Text>
                        Oklahoma City is a thriving metropolis with a low cost of living, short commute times, big-league quality of life and a diversified economy. Through multiple resident-led tax initiatives called MAPS, Oklahoma City is bursting with new development, bettering its infrastructure and schools and creating new quality-of-life additions to the city that are wowing longtime citizens and drawing attention
                        </Text>
                    </Col>
                </Row>
            </Container>
        </ContainerFrame>
    )
}
