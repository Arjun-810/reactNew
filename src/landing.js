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
                <Nav.Link href="#features">Home</Nav.Link>
                <Nav.Link href="#pricing">Trending</Nav.Link>
                <NavDropdown title="Hobbies" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Our mentors" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#pricing">About us</Nav.Link>
                <Nav.Link href="#pricing">Contact us</Nav.Link>
                <NavDropdown title="Join us" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
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
