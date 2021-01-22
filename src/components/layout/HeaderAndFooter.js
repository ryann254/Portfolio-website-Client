import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import styled from 'styled-components'

const Container = styled.div`
    background: ${props => props.theme.gradient};

    .navbar-dark .navbar-nav .nav-link {
        color: rgba(255,255,255,.8);

        &:hover {
            color: #457fca;
        }
    }

    .login {
        background: #ffc107;
        padding: 0.5rem 1rem;
        text-align: center;
        border-radius: 0.25rem;
        transition: color 0.15s ease-in-out, 
        background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out, 
        box-shadow 0.15s ease-in-out;
        }
`

const Landing = styled.div`
    background: ${props => props.theme.gradient};
    position: relative;
    height: 214px;
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
`

const Footer = styled.footer`
    width: 100%;
`
const Socials = styled.div`
    /* background: #1e3c72; */
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;

    .facebook svg {
        font-size: 32px;
    }

    .twitter svg {
        font-size: 35px;
    }

    .facebook {
        color: #385898;
    }

    .twitter {
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
    background: #1D4350;
    color: ${props => props.theme.primary};
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding-bottom: 40px;

    p {
        font-size: 15px;
        margin-top: 30px;
        padding: 0 20px;
    }

    a {
        text-align: left;
        padding: 0 20px;
        width: 100%;
    }
`

const FooterHeader = styled.h4`
    margin-top: 50px;
    font-size: 22px;
    margin-bottom: 10px;
    text-transform: capitalize;
`

const Underline = styled.div`
    width: 40px;
    height: 2px;
    background: #3494E6;
`

function HeaderAndFooter({children}) {
    return (
        <>
            <Container>
                <Navbar className="mx-auto" expand="md" variant="dark">
                    <Navbar.Brand href="#home">
                        <span className="logo-text pl-2">Portfolio Website</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Nav.Link href="#home" className="mx-auto">Home</Nav.Link>
                            <Nav.Link href="#about" className="mx-auto">About</Nav.Link>
                            <Nav.Link href="#portfolio" className="mx-auto">Members</Nav.Link>
                            <Nav.Link href="#services" className="mx-auto">Events</Nav.Link>
                            <Nav.Link href="#clients" className="mx-auto">Status</Nav.Link>
                            <Nav.Link href="#Team" className="mx-auto">FAQ</Nav.Link>
                            <Nav.Link href="#blog" className="mx-auto">Contact</Nav.Link>
                            <Nav.Link href="#contact" className="mx-auto contact">Donation</Nav.Link>
                            <Nav.Link href="/login" className="mx-auto text-white login">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar> 
            </Container>
            <Landing>
                <Img src="assets/bg-3.jpg" alt="bg" className="img-fluid"/>
            </Landing>
            {children}
            <Footer>
                <Socials>
                    <div className="pr-2 facebook">
                        <span class="iconify" data-icon="cib:facebook" data-inline="false"></span>
                    </div>
                    <div className="pr-2 twitter">
                        <span class="iconify" data-icon="ant-design:twitter-circle-filled" data-inline="false"></span>
                    </div>
                    <div className="pr-2 insta">
                        <span class="iconify" data-icon="whh:circleinstagram" data-inline="false"></span>
                    </div>
                    <div className="quora">
                        <span class="iconify" data-icon="whh:circlequora" data-inline="false"></span>
                    </div>
                </Socials>
                <UsefulLinks>
                    <FooterHeader>Our Vision</FooterHeader>
                    <Underline />
                    <p>Our vision is to change the life of all students who're hungry for success. That's why you're here today.</p>
                </UsefulLinks>
                <UsefulLinks>
                    <FooterHeader>useful links</FooterHeader>
                    <Underline />
                    <a>About</a>
                    <a>Contact</a>
                    <a>Terms Of Use</a>
                    <a>Entrepreneurship</a>
                    <a>Incubation</a>
                    <a>Blog</a>
                </UsefulLinks>
                <UsefulLinks>
                    <FooterHeader>Our Vision</FooterHeader>
                    <Underline />
                    <p>Our vision is to change the life of all students who're hungry for success. That's why you're here today.</p>
                </UsefulLinks>
            </Footer>
        </>
    )
}

export default HeaderAndFooter;