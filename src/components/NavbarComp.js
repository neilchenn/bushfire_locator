import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

export default class NavBarComp extends Component {
    render() {
       return ( 
        <div>
            <Navbar bg="dark" variant={"dark"} expand="lg">
                <Navbar.Brand href="#home">2019-2020 Australian Bushfire Season</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>

                    </Nav>

                </Navbar.Collapse>
                </Navbar>
        </div>
       )
    }
}