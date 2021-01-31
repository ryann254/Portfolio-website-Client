import React, {useContext} from 'react'
import styled from 'styled-components'
import Accordion from 'react-bootstrap/Accordion'
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import AccordionContext from 'react-bootstrap/AccordionContext';

//Own Components
import {Text} from './Homepage'
import {EventHeader} from './SingleEvent'

const Member = styled.div`
    margin-top: 75px;

    @media all and (min-width: 768px) {
        .member-image {
            height: 219px;
        }
    }
`

const Title = styled.div`
    font-size: 15px;
    font-weight: bold;
`

const Link = styled.a`
    font-size: 16px;
    margin-top: 15px;
`

const Break = styled.hr`
    margin: 20px 0;
`

export default function SingleMember({picNumber}) {
    function ContextAwareToggle({ eventKey, callback }) {
        const currentEventKey = useContext(AccordionContext);
      
        const decoratedOnClick = useAccordionToggle(
          eventKey,
          () => callback && callback(eventKey),
        );
      
        const isCurrentEventKey = currentEventKey === eventKey;
      
        return (
          <Link
            onClick={decoratedOnClick}
          >
            {isCurrentEventKey ? 'Read less' : 'Read more about Matt'}
          </Link>
        );
      }

    return (
        <Member className="member">
            <img src={`assets/members/member-${picNumber}.webp`} alt="members" className="img-fluid member-image"/>
            <EventHeader>MATT BARRIE</EventHeader>
            <Title>Chief Executive Officer & Chairman</Title>
            <Break></Break>
            <Text className="desc">
                The ease with which I have been able to find my niche in OKC, both in my professional endeavors and my community work. Having left behind an established professional and community network, I was worried about reestablishing that in OKC.
            </Text>
            <Accordion>
                <Accordion.Collapse eventKey="0">             
                    <p className="hidden-content">
                    Action Against Hunger is an NGO that fights against hunger in the world. Our humanitarian actions focus on the prevention, detection and treatment of undernutrition. We bring our expertise in different areas such as health and nutrition, food security and livelihoods, access to water, sanitation and hygiene, but also mental health. Today still 690 million people suffer from hunger in the world. The main causes, climate change, inequalities and conflicts.
                    Action Against Hunger is an NGO that fights against hunger in the world. Our humanitarian actions focus on the prevention, detection and treatment of undernutrition. We bring our expertise in different areas such as health.
                    </p>
                </Accordion.Collapse>
                <div>
                    <ContextAwareToggle eventKey="0">
                        <Link>Read more about Matt</Link>
                    </ContextAwareToggle>
                </div>
            </Accordion>
        </Member>
    )
}
