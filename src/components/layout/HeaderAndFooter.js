import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import styled from 'styled-components'

//All the styles from the ${props => props.theme.main} come from the theme.js
//The light theme to be specific
const ContainerFrame = styled.div`
    background: ${props => props.theme.gradient};

    .navbar-dark .navbar-nav .nav-link {
        color: rgba(255,255,255,.8);

        &:hover {
            color: #457fca;
        }
    }
    
    .navbar-nav {
        text-transform: uppercase;
        font-size: 15px;
    }

    .login {
        margin-top: 5px;
        background: #ffc107;
        padding: 0.5rem 1rem !important;
        text-align: center;
        border-radius: 0.25rem;
        transition: color 0.15s ease-in-out, 
        background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out, 
        box-shadow 0.15s ease-in-out;
        }

        @media all and (min-width: 768px) {
            .navbar-nav {
                align-items: center;
                width: 95%;
                margin-left: auto;
            }

            .nav-link {
                flex-grow: 0.1;
            }
        }

        @media all and (min-width: 992px) {
            .navbar-nav {
                width: 80%;
            }
        }

        @media all and (min-width: 1200px) {
            .navbar-nav {
                width: 70%;
            }
        }

        @media all and (min-width: 1920px) {
        max-width: 1920px;
        margin: 0 auto;
    }
`

const Landing = styled.div`
    background: ${props => props.theme.gradient};
    position: relative;
    height: 214px;

    @media all and (min-width: 576px) {
        height: 300px;
    }

    @media all and (min-width: 768px) {
        height: 390px;
    }

    @media all and (min-width: 992px) {
        height: 510px;
    }

    @media all and (min-width: 1200px) {
        height: 630px;
    }

    @media all and (min-width: 1440px) {
        height: 700px;
    }

    @media all and (min-width: 1920px) {
        max-width: 1920px;
        margin: 0 auto;
    }
`

const Img = styled.img`
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -45%);
    width: 90%;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    
    @media all and (min-width: 576px) {
        top: 57%;
        left: 50%;
        transform: translate(-50%, -43%);
    }

     
    @media all and (min-width: 768px) {
        top: 56%;
        left: 50%;
        transform: translate(-50%, -44%);
    }

    @media all and (min-width: 992px) {
        top: 56%;
        left: 50%;
        transform: translate(-50%, -44%);
    }

    @media all and (min-width: 1200px) {
        top: 55%;
        left: 50%;
        transform: translate(-50%, -45%);
    }

    @media all and (min-width: 1440px) {
        width: 88%;
        height: 800px !important;
    }

    @media all and (min-width: 1920px) {
        width: 85%;
    }
`
 
const Footer = styled.footer`
    width: 100%;
    margin-top: 40px;
    padding-bottom: 25px;
    background: #1D4350;


    .upper-footer {
        padding: 10px 0;
        background: #1e3c72;

        p {
            color: ${props => props.theme.primary}
        }
    }

    @media all and (min-width: 411px) {
        p {
            font-size: 16px !important;
        }
    }

    @media all and (min-width: 1200px) {
        .bottom-footer {
            max-width: 1140px;
        }
    }

    @media all and (min-width: 1920px) {
        max-width: 1920px;
        margin: 0 auto;
    }
`
const Socials = styled.div`
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;

    .facebook img {
        font-size: 48px;
        color: #385898;
    }

    .twitter svg {
        font-size: 35px;
        color: #65C7F7;

    }

    .insta svg {
        font-size: 31px;
        color: #D76D77;
    }

    .quora svg {
        font-size: 31px;
        color: #b92b27;
    }
`

const UsefulLinks = styled.div`
    color: ${props => props.theme.primary};
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    p {
        font-size: 15px;
        margin-top: 30px;
        padding: 0 20px;
    }

    a {
        margin-top: 30px;
        color: ${props => props.theme.primary} !important;
    }
`

const FooterHeader = styled.h4`
    margin-top: 40px;
    font-size: 20px;
    margin-bottom: 10px;
    text-transform: uppercase;
`

const Underline = styled.div`
    width: 40px;
    height: 2px;
    background: #3494E6;
`

const ContactDetails = styled.div`
    display: flex;
    text-align: left;
    align-items: center;
    padding: 0 20px;

    svg {
        font-size: 22px;
        color: ${props => props.theme.primary};
        margin-top: 10px;
    }
`

function HeaderAndFooter({children}) {
    return (
        <>
            <ContainerFrame>
                <Navbar className="mx-auto" expand="md" variant="dark">
                    <Navbar.Brand href="/">
                        <span className="logo-text pl-2">Donation Website</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Nav.Link href="/" className="mx-auto">Home</Nav.Link>
                            <Nav.Link href="/about" className="mx-auto">About</Nav.Link>
                            <Nav.Link href="/events" className="mx-auto">Events</Nav.Link>
                            <Nav.Link href="/status" className="mx-auto">Status</Nav.Link>
                            <Nav.Link href="/faq" className="mx-auto">FAQ</Nav.Link>
                            <Nav.Link href="/contact" className="mx-auto">Contact</Nav.Link>
                            <Nav.Link href="/donation" className="mx-auto contact">Donation</Nav.Link>
                            <Nav.Link href="/login" className="mx-auto text-white login">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar> 
            </ContainerFrame>
            <Landing>
                <Img src="assets/bg-images/bg-3.webp" alt="bg" className="img-fluid"/>
            </Landing>
            {children}
            <Footer>
                <div className="upper-footer">
                    <Socials>
                        <div className="pr-2 facebook">
                            <img src="assets/icons/facebook-48.webp" alt="icons"/>
                        </div>
                        <div className="pr-2 twitter">
                            <img src="assets/icons/twitter-48.webp" alt="icons"/>
                        </div>
                        <div className="pr-2 insta">
                            <img src="assets/icons/instagram-48.webp" alt="icons"/>
                        </div>
                        <div className="quora">
                            <img src="assets/icons/quora-48.webp" alt="icons"/>
                        </div>
                    </Socials>
                    <p className="text-center">Get connected with us on social networks</p>
                </div>
                <Container className="bottom-footer" fluid>
                    <Row>
                        <Col xs={12} md={6} xl={4}>
                            <UsefulLinks>
                                <FooterHeader>Our Vision</FooterHeader>
                                <Underline />
                                <p>Our vision is to change the life of all students who're hungry for success. That's why you're here today.</p>
                            </UsefulLinks>
                        </Col>
                        <Col xs={12} md={6} xl={4}>
                            <UsefulLinks>
                                <FooterHeader>useful links</FooterHeader>
                                <Underline />
                                <a href="/about">About</a>
                                <a href="/events">Events</a>
                                <a href="/status">Status</a>
                                <a href="/faq">FAQ</a>
                                <a href="/contact">Contact</a>
                                <a href="/donation">Donation</a>
                            </UsefulLinks>
                        </Col>
                        <Col xs={12} md={6} xl={4}>
                            <UsefulLinks>
                                <FooterHeader>Contact</FooterHeader>
                                <Underline />
                                <ContactDetails>
                                    <span className="iconify" data-icon="bi:house-fill" data-inline="false"></span>
                                    <p>King Zoo Palace | Githurai 44 Road, 00100</p>
                                </ContactDetails>
                                <ContactDetails>
                                    <span className="iconify" data-icon="clarity:email-solid" data-inline="false"></span>
                                    <p>client@gmail.com</p>
                                </ContactDetails>
                                <ContactDetails>
                                    <span className="iconify" data-icon="entypo:phone" data-inline="false"></span>
                                    <p>+987879929202</p>
                                </ContactDetails>
                            </UsefulLinks>
                        </Col>
                    </Row>
                </Container>
            </Footer>
        </>
    )
}

export default HeaderAndFooter;