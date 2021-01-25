import React from 'react'
import styled from 'styled-components'

//Own Components
import {EventHeader, Text} from './Homepage'

const Member = styled.div`
    margin-top: 40px;
`

const Link = styled.a``

export default function SingleMember({picNumber}) {
    return (
        <Member>
            <img src={`assets/members/member-${picNumber}`} alt="members" />
            <EventHeader>MATT BARRIE</EventHeader>
            <Title>Chief Executive Officer & Chairman</Title>
            <hr></hr>
            <Text>
                The ease with which I have been able to find my niche in OKC, both in my professional endeavors and my community work. Having left behind an established professional and community network, I was worried about reestablishing that in OKC.
            </Text>
            <Link></Link>
        </Member>
    )
}
