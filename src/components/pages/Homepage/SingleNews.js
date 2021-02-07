import React from 'react'   
import styled from 'styled-components'
import {Link} from 'react-router-dom'

//Own Components
import {EventHeader} from './SingleEvent'


const News = styled.div`
    position: relative;
    margin-top: 45px;
    margin-bottom: 55px;
    background: ${props => props.theme.primary};
    border-radius: 5px;

    .news-text {
        font-size: 22px;
    }

    @media all and (min-width: 768px) {
        .news-image {
            height: 220px;
        }
    }
`

export const Date = styled.div`
    color: #7b7b7b;
`

export const Pointer = styled(Link)`
    width: 40px;
    height: 40px;
    background: ${props => props.theme.darkColor};
    color: ${props => props.theme.primary};
    border-radius: 5px;
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    transition: all 250ms;
    cursor: pointer;

    &:hover {
        transform: rotate(45deg) translateX(-75%);
        color: #fff;
        background: #0479cb;

        .fa {
            transform: rotate(-45deg) translate(-0%, -65%);
        }
    }
    
    .fa {
        font-size: 19px;
        margin-left: auto;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`

export default function SingleNews({newsItem, handleViewNews}) {
    return (
        <>
            <News>
                <img src={newsItem.picture.split(',')[0]} alt="events" className="img-fluid news-image"/>
                <div className="pt-3 pl-3 pr-3 pb-5">
                    <Date>Jan 20, 2021</Date>
                    <EventHeader className="news-text">{newsItem.title}</EventHeader>
                </div>
                <Pointer to="/news-page" onClick={() => handleViewNews(newsItem)}>
                    <i class="fa fa-arrow-right"></i>
                </Pointer>
            </News>
        </>
    )
}
