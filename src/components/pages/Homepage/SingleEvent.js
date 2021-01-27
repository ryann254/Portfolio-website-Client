import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

//Own Components
import {Text} from './Homepage'


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

    .event-text {
        padding-bottom: 50px !important;
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

export default function SingleEvent({picNumber}) {
    return (
        <Event>
            <Link to="/events-page">
                <img src={`assets/events/event-${picNumber}.jpg`} alt="events" className="img-fluid"/>
                <EventHeader className="pt-4 pl-4 pr-4 header">A place for all</EventHeader>
                <Text className="text-dark p-4 mt-0 event-text">
                    Whether in an international grocery store that carries that hard to find item that reminds you of home or a religious center that gives you a sense of community, Oklahoma City is diverse when it comes to its cultural options.
                </Text>
            </Link>
        </Event>
    )
}
