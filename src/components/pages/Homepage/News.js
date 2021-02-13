import React, {useEffect} from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Flip from 'react-reveal/Flip'
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'


//Own Components
import {Header} from './Events'
import {Underline, Text} from './Homepage'
import SingleNews from './SingleNews'
import Api from '../../../services/network'
import { AddNews, ViewNews } from '../../../redux/action-creator/NewsActionCreator'
import notify from '../../../helpers/Notify'

const ContainerFrame = styled.div`
    background: #f6f6f6;
    padding-top: 45px;

    a {
        text-decoration: none !important;
        color: #fff !important;
    }

    .btn {
        display: flex;
        margin: 50px auto 50px auto;
        border-radius: 0;
        padding: .575rem 1.6rem;
        width: 50%;
        justify-content: center;
    }

    @media all and (min-width: 992px) {
        .news-container {
            max-width: 960px;
        }

        .btn {
            width: 40%;
        }
    }

    @media all and (min-width: 992px) {
        .news-container {
            max-width: 1140px;
        }
    }

    @media all and (min-width: 1920px) {
        max-width: 1920px;
        margin: 0 auto;
    }
`

export default function News() {
    const dispatch = useDispatch()
    const api = new Api()
    const {news} = useSelector(state => state.news)
    const {updateCount} = useSelector(state => state.events)

    
    useEffect(() => {
        fetchNews()
        // eslint-disable-next-line
    }, [updateCount])

    function fetchNews() {
        api.News().getAllNewsArtilces()
        .then(res => {
            if (res.status === 200) {
                dispatch(AddNews(res.data.results))
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
    function handleViewNews(newsItem) {
        dispatch(ViewNews(newsItem))
    }
    return (
        <ContainerFrame>
            <Container fluid className="news-container">
                <Row>
                    <Col xs={12}>
                        <Header className="text-center">News</Header>
                        <Underline />
                        <Text>
                            We aren’t the only ones talking about how Oklahoma City is the perfect place to live, work and play. See what others are saying about your next hometown.
                        </Text>
                    </Col>
                    {news.length !== 0 ? news.map(newsItem => (
                        <Col xs={12} md={6} lg={4} key={newsItem.id}>
                            <Flip bottom>
                                <SingleNews newsItem={newsItem} handleViewNews={handleViewNews} />
                            </Flip>
                        </Col>
                    )): null}
                    <Col xs={12}>
                        <Link to="/news.">
                            <Button variant="primary">See All News</Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </ContainerFrame>
    )
}