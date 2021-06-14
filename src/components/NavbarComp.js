import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import About from "./About"
import URL from "./URL"
import Contact from "./Contact"

export default class NavBarComp extends Component {
    render() {
       return (
        <Router> 
            <div>
                <Navbar bg="dark" variant={"dark"} expand="lg">
                    <Navbar.Brand href="#home">2019-2020 Australian Bushfire Season</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#url">URL</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                    </Navbar>
            </div>
            <div>
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/url">
                        <URL />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                </Switch>
            </div>



        </Router>
       )
    }
}