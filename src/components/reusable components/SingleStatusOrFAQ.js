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
        cursor: pointer;
    }

    @media all and (max-width: 320px) {
        .question {
            font-size: 14px;
        }
    }

    @media all and (min-width: 576px) {
        width: 90%;
        display: flex;
        margin-left: auto;
        margin-right: auto;

        .question {
            font-size: 1.25rem;
        }
    }
`

export default function SingleStatusOrFAQ({questionOrStatus, answers, index}) {
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
                <Text>{answers[index]}</Text>
                </Accordion.Collapse>
            </Accordion>
        </ContainerFrame>
    )
}
