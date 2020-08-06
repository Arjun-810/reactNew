import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactBootstrap, { Navbar, Nav, NavDropdown, Image} from 'react-bootstrap'
// get our fontawesome imports
import 'font-awesome/css/font-awesome.min.css';
import logo from "./habbit-logo-primary-menu.png";

class Landing extends Component {
   
    render() {

        return (
            <Navbar collapseOnSelect expand="lg" variant="dark" style={{color:'white'}}>
            <Navbar.Brand href="#home">
            <Image src={logo} fluid width="130px" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="justify-content-end" style={{ width: "95%" }}>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="#pricing">Trending</Nav.Link>
                <NavDropdown title="Hobbies" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Creative Hobbies</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Value Hobbies</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Technical Hobbies</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Our mentors" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Creative Hobbies</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Value Hobbies</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Technical Hobbies</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#pricing">About us</Nav.Link>
                <Nav.Link href="#pricing">Contact us</Nav.Link>
                <NavDropdown title="Join us" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/app">Be a mentor</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Join our team</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#pricing"><i className="fa fa-instagram" /></Nav.Link>
                <Nav.Link href="#pricing"><i className="fa fa-search" /></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        );
    }
}

export default Landing;
