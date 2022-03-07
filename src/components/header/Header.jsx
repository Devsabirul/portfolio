import React from 'react'
import './header.css'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'

const Header = () => {
    return (
        <>
            <Navbar bg="white" className='header_shadow' expand="lg" sticky='top' collapseOnSelect >
                <Container>
                    <Navbar.Brand href='#' className='logo-sm'>
                        <img src="./logo.png" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className='justify-content-end'>
                        <Nav>
                            <Nav.Link className="nav_text_spacing nav_text_color" href="#home">Home</Nav.Link>
                            <Nav.Link className="nav_text_spacing nav_text_color" href="#about">About</Nav.Link>
                            <Nav.Link className="nav_text_spacing nav_text_color" href="#service">Service</Nav.Link>
                            <Nav.Link className="nav_text_spacing nav_text_color" href="#portfolio">Portfolio</Nav.Link>
                            <Nav.Link className="nav_text_spacing nav_text_color" href="#blog">Blog</Nav.Link>
                            <Nav.Link className="nav_text_spacing nav_text_color" href="#contact">Contact</Nav.Link>
                            <Button className="nav_btn">Contact Now</Button>
                        </Nav>
                    </Navbar.Collapse>

                </Container>

            </Navbar>
        </>
    )
}

export default Header
