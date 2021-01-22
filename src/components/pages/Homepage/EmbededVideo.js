import React from 'react'
import styled from 'styled-components'

const IframeContainer = styled.div`
    position: relative;
    width: 100%;
    padding-bottom: 56.25%; 
    height: 0;

    iframe {
        position: absolute;
        top:0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`

export default function EmbededVideo() {
    return (
        <IframeContainer>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/cxmOmGiOipI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </IframeContainer>
    )
}
