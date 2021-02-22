import React, {useEffect, useState} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components'
import {useDispatch, useSelector} from 'react-redux'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import $ from 'jquery'

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
        --fall-animation-duration: 200ms;
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
    const {user} = useSelector(state => state.auth)
    const {viewEvent, updateCount} = useSelector(state => state.events)
    const api = new Api()

    useEffect(() => {
        //Scroll to the top
        $(document).ready(function(){
            $(this).scrollTop(0);
        });

        if (user === '') {
            //Checking whether the user is logged in
            checkAuth()
        }
        
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
        if (viewEvent !== '') {
            const newArray = viewEvent.picture.split(',')
            setPictures(newArray)
        }
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
                            interval={3000}
                            animation="fallAnimation">
                                {pictures.length !== 0 ? pictures.map(pic => (
                                    <div data-src={pic} />
                                )): null}
                        </AutoplaySlider>
                    </Col>
                    <Col xs={12} className="text-container">
                        <Text>
                            {viewEvent.description}
                        </Text>
                    </Col>
                </Row>
            </Container>
        </ContainerFrame>
    )
}
