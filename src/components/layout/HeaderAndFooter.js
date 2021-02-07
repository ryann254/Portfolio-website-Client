import React, {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import styled from 'styled-components'
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
import $ from 'jquery'
import { ToastContainer } from 'react-toastify';
import {useSelector, useDispatch} from 'react-redux'

//Own Components
import Modal from '../reusable components/Modal'
import MovingBackground from '../reusable components/MovingBackground'
import Api from '../../services/network'
import {AddUser, UpdateAuth} from '../../redux/action-creator/AuthActionCreator'
import notify from '../../helpers/Notify'


const stripePromise = loadStripe('pk_test_51HWJt8DnpHPxB6GWCJgSUeP5okYIZ0zvYMtD02smALOGeNSECOFxkx6O9Ts9OFXQXOVjuLAXDfTep9fb7BaFzNJ4000PspTqPk')


//All the styles from the ${props => props.theme.main} come from the theme.js
//The light theme to be specific
const OuterContainer = styled.div`
    transition: all 500ms cubic-bezier(0.55, 0, 0.1, 1);

    .sticky {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 50;
        box-shadow:0 2px 6px rgba(0,0,0,0.2);  
        animation:slide-down 0.7s;
        opacity:0.9; 
    }

    @keyframes slide-down {
        0% {
            opacity: 0;
            transform: translateY(-100%);
        } 
        100% {
            opacity: 0.9;
            transform: translateY(0);
        } 
    }
`
const ContainerFrame = styled.div`
    background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
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

    .login, .logout {
        margin-top: 5px;
        background: #007bff;
        padding: 0.5rem 1rem !important;
        text-align: center;
        border-radius: 0.25rem;
        transition: color 0.15s ease-in-out, 
        background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out, 
        box-shadow 0.15s ease-in-out;
    }

    .logout {
        background: #ffc107;
    }
    
        @media all and (min-width: 768px) {
            .navbar-nav {
                align-items: center;
                width: 100%;
                margin-left: auto;
            }

            .nav-link {
                flex-grow: 0.1;
            }
        }

        @media all and (min-width: 992px) {
            .navbar-nav {
                width: 85%;
            }
        }

        @media all and (min-width: 1200px) {
            .navbar-nav {
                width: 75%;
            }
        }

        @media all and (min-width: 1920px) {
            max-width: 1920px;
            margin: 0 auto;
        }
`
 
const Footer = styled.footer`
    width: 100%;
    margin-top: 60px;


    .upper-footer {
        padding: 10px 0;
        background: #1e3c72;

        p {
            color: ${props => props.theme.primary}
        }
    }

    .bottom-footer {
        height: 940px;
        padding-right: 0;
        padding-left: 0;
        position: relative;
    }

    .footer-container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        margin-left: 0;
        margin-right: 0;
    }

    @media all and (min-width: 411px) {
        .bottom-footer {
            height: 960px;
        }

        p {
            font-size: 16px !important;
        }
    }

    @media all and (min-width: 768px) {
        .bottom-footer {
            height: 770px;
        }
    }

    @media all and (min-width: 1200px) {
        .bottom-footer {
            height: 500px;
        }

        margin-top: 85px;
    }

    @media all and (min-width: 1920px) {
        max-width: 1920px;
        margin: 85px auto 0 auto;
    }
`
const Socials = styled.div`
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;

    .facebook, .twitter, .insta, .quora {
        background-color: #eceeef;
        color: #818a91;
        font-size: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        line-height: 44px;
        width: 44px;
        height: 44px;
        text-align: center;
        margin-right: 8px;
        border-radius: 100%;
        transition: all .2s linear;
    }

    .facebook {
        &:hover {
            background-color: #3b5998;
            color: #fff;
        }
    }

    .twitter {
        &:hover {
            background-color: #00aced;
            color: #fff;
        }
    }

    .insta {
        &:hover {
            background-color: #ea4c89;
            color: #fff;
        }
    }

    .quora {
        &:hover {
            background-color: rgb(185, 43, 39);
            color: #fff;
        }
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

    @media all and (min-width: 1200px) {
        padding-bottom: 50px;
    }
`

const FooterHeader = styled.h4`
    margin-top: 50px;
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

const LandingContainer = styled.div`
    .delete {
        display: none !important;
    }
`

const Landing = styled.div`
    background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
    position: relative;
    height: 214px;

    @media all and (min-width: 768px) {
        height: 250px;
    }

    @media all and (min-width: 1920px) {
        max-width: 1920px;
        margin: 0 auto;
    }
`

const Logo = styled.img`
    width: 70px;

    @media all and (min-width: 768px) {
        width: 60px;
    }
`

function HeaderAndFooter({children}) {
    const [show, setShow] = useState(false)
    const [title, setTitle] = useState('')
    const dispatch = useDispatch()
    const {auth, user} = useSelector(state => state.auth)
    const api = new Api()

    useEffect(() => {
        const userId = localStorage.getItem('currentUser')

        //Checking whether the user is logged in
        if (userId !== null && userId !== '') {
            api.Users().getUser(userId)
            .then(res => {
                if (res.status === 200) {
                    dispatch(AddUser(res.data))
                }
            })
            .catch(err => {
                if (err.response) {
                    const {message} = err.response.data
                    console.log(message)
                } else {
                    console.log(err)
                }
            })
        }
        // eslint-disable-next-line
    }, [])

    const handleShow = () => setShow(!show)

    function handleLogout() {
        let data = {
            refreshToken: `${localStorage.getItem('refreshToken')}`
        }
        api.auth().logout(data)
        .then(res => {
            if (res.status === 204) {
                dispatch(UpdateAuth(false))
                notify('success', 'Logged out successfully')
                localStorage.removeItem('jwtToken')
                localStorage.removeItem('refreshToken')
                localStorage.removeItem('currentUser')
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

    //Making the header sticky after scrolling to a certain height
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50){  
          $('.header').addClass("sticky");
        }
        else {
          $('.header').removeClass("sticky");
        }
      });

      //Removing the slider on all other pages except from home
      $(function() {
        if (window.location.href.includes('about')) {
            setTitle('ABOUT PAGE')
        } else if (window.location.href.includes('events.')) {
            setTitle('EVENTS PAGE')
        } else if (window.location.href.includes('news.')) {
            setTitle('NEWS PAGE')
        } else if (window.location.href.includes('jobs.')) {
            setTitle('JOBS PAGE')
        } else if (window.location.href.includes('status')) {
            setTitle('STATUS PAGE')
        } else if (window.location.href.includes('faq')) {
            setTitle('FAQ PAGE')
        } else if (window.location.href.includes('contact')) {
            setTitle('CONTACT PAGE')
        } else if (window.location.href.includes('donation')) {
            setTitle('DONATION PAGE')
        } else if (window.location.href.includes('jobs-page')) {
            setTitle('SINGLE JOB PAGE')
        } else if (window.location.href.includes('events-page')) {
            setTitle('SINGLE EVENT PAGE')
        } else if (window.location.href.includes('news-page')) {
            setTitle('SINGLE NEWS PAGE')
        } else if (window.location.href.includes('home')) {
            $('.moving-bg').addClass("delete");
            setTitle('')
        }
      });

    return (
        <>
        <ToastContainer
            position="top-right"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
        />
      <Elements stripe={stripePromise}>
            <Modal show={show} modalType="form" title="Please fill in your details" onHide={handleShow}/>
            <OuterContainer>
                <ContainerFrame className="header">
                    <Navbar className="mx-auto" expand="lg" variant="dark">
                        <Navbar.Brand href="/">
                            <span className="logo-text pl-2">
                                <Logo src="assets/bg-images/Logo-1.jpg" className="img-fluid"/>
                            </span></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav>
                                <Nav.Link href="/home" className="mx-auto">Home</Nav.Link>
                                <Nav.Link href="/about" className="mx-auto">About</Nav.Link>
                                <Nav.Link href="/events." className="mx-auto">Events</Nav.Link>
                                <Nav.Link href="/news." className="mx-auto">News</Nav.Link>
                                <Nav.Link href="/jobs." className="mx-auto">Jobs</Nav.Link>
                                <Nav.Link href="/status" className="mx-auto">Status</Nav.Link>
                                <Nav.Link href="/faq" className="mx-auto">FAQ</Nav.Link>
                                <Nav.Link href="/contact" className="mx-auto">Contact</Nav.Link>
                                <Nav.Link href="/donation" className="mx-auto contact">Donation</Nav.Link>
                                {user !== '' && auth === true ? (<Nav.Link href="#" className="mx-auto text-white logout" onClick={handleLogout}>Logout</Nav.Link>) : (
                                    <Nav.Link href="#" className="mx-auto text-white login" onClick={handleShow}>Login</Nav.Link>
                                )}
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar> 
                </ContainerFrame>
                </OuterContainer>
                <LandingContainer>
                    <Landing className="moving-bg">
                        <MovingBackground title={title} />
                    </Landing>
                </LandingContainer>
                    {children}
                <Footer>
                    <div className="upper-footer">
                        <Socials>
                            <div className="facebook">
                                <i class="fa fa-facebook-f"></i>
                            </div>
                            <div className="twitter">
                                <i class="fa fa-twitter"></i>
                            </div>
                            <div className="insta">
                                <i class="fa fa-instagram"></i>
                            </div>
                            <div className="quora">
                                <i class="fa fa-quora"></i>
                            </div>
                        </Socials>
                        <p className="text-center">Get connected with us on social networks</p>
                    </div>
                        <Container className="bottom-footer" fluid>
                            <MovingBackground>
                            <Row className="footer-container">
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
                            </MovingBackground>
                        </Container>
                </Footer>
            </Elements>
        </>
    )
}

export default HeaderAndFooter;