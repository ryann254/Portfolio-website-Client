import React from 'react'
import styled from 'styled-components'

import './MovingBackground.scss'
const ContainerFrame = styled.div`
    height: inherit;
`

export default function MovingBackground({children}) {
    return (
        <ContainerFrame>
            <div className="background-container">
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
            </div>
            {children}
        </ContainerFrame>
    )
}
