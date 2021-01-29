import React from 'react'
import styled from 'styled-components'

import './MovingBackground.scss'
const ContainerFrame = styled.div`
    position: absolute;
`

export default function MovingBackground() {
    console.log('here')
    return (
        <ContainerFrame>
            <div className="background-container">
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
            </div>
        </ContainerFrame>
    )
}
