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

const Footer = styled.div`

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
            {children}
            <Footer>Footer</Footer>
        </>
    )
}

export default HeaderAndFooter;