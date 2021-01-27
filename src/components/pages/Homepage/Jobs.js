import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import styled from 'styled-components'

//Own Components
import {Underline, Text} from './Homepage'

const ContainerFrame = styled.div`
    .btn {
        border-radius: 0 !important;
    }
`

export const Header = styled.h1`
    font-weight: bold;
    margin-top: 40px;
`

const JobLink = styled.div`
    background: ${props => props.theme.darkColor};
    width: 90%;
    color: ${props => props.theme.primary};
    padding: 15px 20px;
    border-radius: 5px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    text-align: center;

    svg {
        padding-left: 6px;
        font-size: 24px;
    }
`

const JobContainer = styled.div`
    margin-top: 40px;
`

export default function Jobs() {
    return (
        <ContainerFrame>
            <Container>
                <Row>
                    <Col xs={12}>
                        <Header>Featured Jobs</Header>
                        <Underline />
                        <Text>
                        Did you know Oklahoma City has one of the most diversified economies in the United States? A quick look at our job boards will show you that no matter your expertise, our community has a place for you. You can search by job type or simply view all jobs to see what opportunities await you in OKC.
                        </Text>
                        <Button variant="primary">View All Jobs</Button>
                    </Col>
                    <Col xs={12}>
                        <JobContainer>
                            <img src="assets/jobs/job-1.jpg" alt="jobs" className="img-fluid"/>
                            <JobLink>
                                Software and Cybersecurity
                                <span class="iconify" data-icon="carbon:arrow-right" data-inline="false"></span>
                            </JobLink>
                        </JobContainer>
                    </Col>
                    <Col xs={12}>
                        <JobContainer>
                            <img src="assets/jobs/job-2.jpg" alt="jobs" className="img-fluid"/>
                            <JobLink>
                                Health Care
                                <span class="iconify" data-icon="carbon:arrow-right" data-inline="false"></span>
                            </JobLink>
                        </JobContainer>
                    </Col>
                    <Col xs={12}>
                        <JobContainer>
                            <img src="assets/jobs/job-3.jpg" alt="jobs" className="img-fluid"/>
                            <JobLink>
                                Aerospace
                                <span class="iconify" data-icon="carbon:arrow-right" data-inline="false"></span>
                            </JobLink>
                        </JobContainer>
                    </Col>
                </Row>
            </Container>
        </ContainerFrame>
    )
}
