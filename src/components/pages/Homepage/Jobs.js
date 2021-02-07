import React, {useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'


//Own Components
import {Underline, Text} from './Homepage'
import Api from '../../../services/network'
import { AddJob, ViewJob } from '../../../redux/action-creator/JobActionCreator'
import notify from '../../../helpers/Notify'

const ContainerFrame = styled.div`
    .btn {
        border-radius: 0 !important;
        width: 50%;
        padding: .575rem .75rem;
    }

    a {
        text-decoration: none !important;
        color: #fff !important;
    }

    @media all and (min-width: 992px) {
        .container {
            max-width: 960px !important;
        }

        .underline {
            margin-left: initial;
        }

        .jobs-component {
            margin-top: 50px;
        }

        .jobs-image {
            width: 350px;
            height: 234px;
            display: flex;
            margin-left: auto;
        }
    }

    @media all and (min-width: 1200px) {
        .container {
            max-width: 1140px !important;
        }

        .jobs-image {
            display: flex;
            margin-left: auto;
            margin-right: auto;
        }
    }

    @media all and (min-width: 1440px) {
        .jobs-component {
            margin-top: 60px;
        }
    }
`

export const Header = styled.h1`
    font-weight: bold;
    text-align: center;
    margin-top: 65px;

    @media all and (min-width: 576px) {
        margin-top: 85px;
    }


    @media all and (min-width: 992px) {
        font-size: 2.7rem;
        text-align: left;
    }
`

const JobLink = styled(Link)`
    background: ${props => props.theme.darkColor};
    width: 90%;
    color: ${props => props.theme.primary};
    padding: 15px 0px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    text-align: center;

    svg {
        padding-left: 6px;
        font-size: 24px;
        padding-top: 5px;
    }

    @media all and (min-width: 411px) {
        width: 80%;
    }

    @media all and (min-width: 992px) {
        width: 350px;
        margin-right: initial;
    }

    @media all and (min-width: 1200px) {
        margin-right: auto;
    }
`

const JobContainer = styled.div`
    margin-top: 75px;
`

export default function Jobs() {
    const dispatch = useDispatch()
    const api = new Api()
    const {updateCount} = useSelector(state => state.events)
    const {jobs} = useSelector(state => state.jobs)

    useEffect(() => {
        fetchJobs()
        // eslint-disable-next-line
    }, [updateCount])

    function fetchJobs() {
        api.Jobs().getAllJobs()
        .then(res => {
            if (res.status === 200) {
                dispatch(AddJob(res.data.results))
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
    function handleViewJob(job) {
        dispatch(ViewJob(job))
    }

    return (
        <ContainerFrame>
            <Container>
                <Row>
                    <Col xs={12} md={6} className="my-md-auto">
                        <Header>Featured Jobs</Header>
                        <Underline className="underline"/>
                        <Text>
                        Did you know Oklahoma City has one of the most diversified economies in the United States? A quick look at our job boards will show you that no matter your expertise, our community has a place for you. You can search by job type or simply view all jobs to see what opportunities await you in OKC.
                        </Text>
                        <Link to="/jobs.">
                            <Button variant="primary">View All Jobs</Button>
                        </Link>
                    </Col>
                    <Col xs={12} md={6} className="jobs-component">
                        {jobs.length !== 0 ? jobs.map((job) => (
                            <JobContainer>
                                <img src={job.picture.split(',')[0]} alt="jobs" className="img-fluid jobs-image"/>
                                <JobLink to="/jobs-page" onClick={() => handleViewJob(job)}>
                                    {job.title.slice(0, 10)}
                                    <span className="iconify" data-icon="carbon:arrow-right" data-inline="false"></span>
                                </JobLink>
                            </JobContainer>
                        )): null}
                    </Col>
                </Row>
            </Container>
        </ContainerFrame>
    )
}
