import React, {useEffect, useState, useRef} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Overlay from 'react-bootstrap/Overlay'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Popover from 'react-bootstrap/Popover'
import styled from 'styled-components'
import {useSelector, useDispatch} from 'react-redux'
import $ from 'jquery'



//Own Components
import {EventHeader, Event} from '../Homepage/SingleEvent'
import {Date, Pointer} from '../Homepage/SingleNews'
import Api from '../../../services/network'
import { AddEvents, ViewEvent } from '../../../redux/action-creator/EventsActionCreator'
import notify from '../../../helpers/Notify'
import Modal from '../../reusable components/Modal'
import {AddUser} from '../../../redux/action-creator/AuthActionCreator'


const ContainerFrame = styled.div`
    background: #f6f6f6;
    margin-top: 70px;
    
    .event {
        position: relative;
        margin-bottom: 65px;

        img {
            height: 236px;
        }
    }

    .create-column {
        height: 400px;
    }
 
    @media all and (min-width: 768px) {
        .heading {
            margin-bottom: 50px;
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
`

const AddButton = styled.div`
    color: #007bff;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    cursor: pointer;

    svg {
        font-size: 49px;
    }
`

function Index() {
    const {auth, user} = useSelector(state => state.auth)
    const {events, updateCount} = useSelector(state => state.events)
    const [popoverShow, setPopoverShow] = useState(false)
    const [modalShow, setModalShow] = useState(false)
    const [target, setTarget] = useState('')
    const [title, setTitle] = useState('')
    const [modalType, setModalType] = useState('')
    const [Id, setId] = useState('')
    const [eventBody, setEventBody] = useState('')
    const dispatch = useDispatch()
    const api = new Api()

    //To open the popover responsible for updating, deleting events
    const popoverRef = useRef()

    useEffect(() => {
        //Scroll to the top
        $(document).ready(function(){
            $(this).scrollTop(0);
        });
        
        if (user === '') {
            //Checking whether the user is logged in
            checkAuth()
        }

        fetchEvents()
        // eslint-disable-next-line
    }, [updateCount])

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

    function fetchEvents() {
        api.Events().getAllEvents()
        .then(res => {
            if (res.status === 200) {
                dispatch(AddEvents(res.data.results))
            }
        })
        .catch(err => {
            if (err.response) {
                const {message} = err.response.data
                notify('error', message)
			} else {
				notify('error', 'Something went wrong, Please refresh the page.')
			}
        })
    }

    const handlePopover = (e) => {
        setPopoverShow(!popoverShow)
        setTarget(e.target)
        setId(e.currentTarget.id)
    }

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Click to add an Event
        </Tooltip>
      );

    function handleDelete() {
        setModalShow(!modalShow)
        setModalType('delete event')
        setTitle('Are you sure you want to delete this event?')
        if (Id !== '') {
            setEventBody(Id)
        }
    }

    function handleCreate() {
        setModalShow(!modalShow)
        setModalType('create event')
        setTitle('Create an Event')
    }

    //Dispatch the event to be viewed on the single event page
    function handleViewEvent(event) {
        dispatch(ViewEvent(event))
    }

    return (
        <ContainerFrame>
            <Modal show={modalShow} modalType={modalType} title={title} body={eventBody} onHide={() => setModalShow(false)}/>
            <Container fluid className="events-container">
                <Row>
                    <Col xs={12} className="heading"></Col>
                    {auth === true ? events.length !== 0 ? events.map((event, index) => (
                        <Col xs={12} md={6} lg={4} key={index} popoverRef={popoverRef} onClick={handlePopover} id={event.id}>
                            <Overlay 
                                show={popoverShow}
                                container={popoverRef.current}
                                target={target}
                                containerPadding={20}
                                key={index}
                                placement="top"
                                rootClose={true}>
                                    <Popover id="popover-basic" onClick={handlePopover}>
                                        <Popover.Title as="h3">Actions</Popover.Title>
                                        <Popover.Content>
                                            <Button variant="danger" onClick={handleDelete}>Delete</Button>
                                        </Popover.Content>
                                    </Popover>
                                </Overlay>
                                <Col>
                                    <Event className="event">
                                        <img src={event.picture.split(',')[0]} className="img-fluid" alt="Events images"/>
                                        <Date className="pt-4 pl-4 pr-4">Jan 20, 2021</Date>
                                        <EventHeader className="pt-4 pl-4 pr-4 pb-5">{event.title.slice(0, 40) + '...'}</EventHeader>
                                        <Pointer to="/events-page" onClick={() => handleViewEvent(event)}><i className="fa fa-arrow-right"></i></Pointer>
                                    </Event>
                                </Col>
                        </Col>)
                    ): null : events.length !== 0 ? events.map((event, index) => (
                        <Col xs={12} md={6} lg={4} key={index}>
                            <Event className="event">
                                 <img src={event.picture.split(',')[0]} className="img-fluid" alt="Events images"/>   
                                <Date className="pt-4 pl-4 pr-4">Jan 20, 2021</Date>
                                <EventHeader className="pt-4 pl-4 pr-4 pb-5">{event.title.slice(0, 40) + '...'}</EventHeader>
                                <Pointer to="/events-page" onClick={() => handleViewEvent(event)}><i className="fa fa-arrow-right"></i></Pointer>
                            </Event>
                        </Col>   
                    )): null}
                    {/* The Add Button */}
                    {auth === true ? (
                        <OverlayTrigger
                            placement="top"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTooltip}
                        >
                            <Col xs={12} md={6} lg={4} onClick={handleCreate} className="create-column">
                                <AddButton>
                                    <span class="iconify" data-icon="akar-icons:plus" data-inline="false"></span>
                                </AddButton>
                            </Col>
                        </OverlayTrigger>
                    ): null}
                </Row>
            </Container> 
        </ContainerFrame>
    )
}

export default Index;