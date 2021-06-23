import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./About";
import Source from "./Source";
import Contact from "./Contact";

export default class NavbarComp extends Component {
    render() {
       return (
        <Router> 
            <div>
                <Navbar bg="dark" variant={"dark"} expand="lg">
                    <Navbar.Brand>2019-2020 Australian Bushfire Season</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                            <Nav.Link as={Link} to={"/source"}>Source</Nav.Link>
                            <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                    </Navbar>
            </div>

            <div>
                <Switch>
                    <Route exact path="/about" component={About} />
                    <Route exact path="/source" component={Source} />
                    <Route exact path="/contact" component={Contact} />
                </Switch>
            </div>



        </Router>
       )
    }
}