import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import ItemsCarousel from 'react-items-carousel';


//Own Components
import {Text} from './Homepage'
import { AddEvents, ViewEvent } from '../../../redux/action-creator/EventsActionCreator'
import notify from '../../../helpers/Notify'
import Api from '../../../services/network'



export const EventHeader = styled.div`
    font-weight: bold;
    font-size: 25px;
    color: ${props => props.theme.darkColor};

    @media all and (max-width: 320px) {
        font-size: 22px;
    }
`

export const Event = styled.div`
    background: ${props => props.theme.primary};
    border-radius: 5px;
    .event-image {
        height: 272px;
    }

    .event-text {
        padding-bottom: 50px !important;
    }

    .event-link {
        text-decoration: none !important;
    }

    @media all and (max-width: 320px) {
        .event-text {
            padding: 1.1rem 1.1rem 35px 1.1rem !important;
        }

        .header {
            padding: 1.1rem 1.1rem 0 1.1rem !important;
        }
    }
`

let cards = 1;

export default function SingleEvent() {
    const {events, updateCount} = useSelector(state => state.events)
    const api = new Api()
    const dispatch = useDispatch()



    useEffect(() => {
        fetchEvents()
        // eslint-disable-next-line
    }, [updateCount])

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

    //Dispatch the event to be viewed on the single event page
    function handleViewEvent(event) {
        dispatch(ViewEvent(event))
    }

    const [activeItemIndex, setActiveItemIndex] = useState(0);
    if (window.screen.width >= 576 && window.screen.width < 992) {
        cards = 2
    } else if (window.screen.width >= 992 && window.screen.width < 1200) {
        cards = 3
    } else if (window.screen.width >= 1200) {
        cards = 4
    }
    return (
        <>
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
                    {events.length !== 0 ? events.map((event, index) => (
                        <Event key={event.id}>
                            <Link to="/events-page" className="event-link" onClick={() => handleViewEvent(event)}>
                                <img src={event.picture.split(',')[0]} alt="events" className="img-fluid event-image"/>
                                <EventHeader className="pt-4 pl-4 pr-4 header">{event.title.slice(0, 40) + '...'}</EventHeader>
                                <Text className="text-dark p-4 mt-0 event-text">
                                    {event.description.slice(0, 120) + '...'}
                                </Text>
                            </Link>
                        </Event>
                    )): null}
            </ItemsCarousel>
        </div>
        </>
    )
}
