import React, {useContext} from 'react'
import Accordion from 'react-bootstrap/Accordion'
import styled from 'styled-components'
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import AccordionContext from 'react-bootstrap/AccordionContext';

//Own Components
import {Text} from '../pages/Homepage/Homepage'

const ContainerFrame = styled.div`
    .question {
        font-weight: bold;
    }

    @media all and (max-width: 320px) {
        .question {
            font-size: 14px;
        }
    }

    @media all and (min-width: 576px) {
        width: 80%;
        display: flex;
        margin-left: auto;
        margin-right: auto;
    }
`

export default function SingleStatusOrFAQ({questionOrStatus}) {
    function ContextAwareToggle({ eventKey, callback }) {
        const currentEventKey = useContext(AccordionContext);
      
        const decoratedOnClick = useAccordionToggle(
          eventKey,
          () => callback && callback(eventKey),
        );
      
        const isCurrentEventKey = currentEventKey === eventKey;
      
        return (
          <Text
            className="question"
            onClick={decoratedOnClick}
          >
            {questionOrStatus } {isCurrentEventKey ? <i class="fa fa-chevron-up"></i> : <i class="fa fa-chevron-down"></i>}
          </Text>
        );
      }

    return (
        <ContainerFrame>
            <Accordion>
                <ContextAwareToggle eventKey="0">
                    Click me!
                </ContextAwareToggle>
                <Accordion.Collapse eventKey="0">
                <Text>Hello! I'm the body</Text>
                </Accordion.Collapse>
            </Accordion>
        </ContainerFrame>
    )
}
