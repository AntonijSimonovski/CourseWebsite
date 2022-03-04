import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./myStyle.css";

class NavBar extends React.Component {
  render() {
    return (
      <Navbar expand="lg" className="navbar justify-content-between">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link href="" bsPrefix="links" target="_blank">
                Contact Instructor
              </Nav.Link>
              <Nav.Link href="" bsPrefix="links" target="_blank">
                CS TechFAQ
              </Nav.Link>
              <NavDropdown
                title="Important Links"
                id="basic-nav-dropdown"
                bsPrefix="links"
              >
                <NavDropdown.Item href="" target="_blank" className="links">
                  myPitt
                </NavDropdown.Item>
                <NavDropdown.Item href="" target="_blank" className="links">
                  CS Department
                </NavDropdown.Item>
                <NavDropdown.Item href="" target="_blank" className="links">
                  Spring '22 Course Schedule
                </NavDropdown.Item>
                <NavDropdown.Item href="" target="_blank" className="links">
                  Academic Calendar
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="" target="_blank" className="links">
                  Covid-19
                </NavDropdown.Item>
                <NavDropdown.Item href="" target="_blank" className="links">
                  Vax Hesitancy
                </NavDropdown.Item>
                <NavDropdown.Item href="" target="_blank" className="links">
                  Following Science
                </NavDropdown.Item>
                <NavDropdown.Item href="" target="_blank" className="links">
                  Mandates
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar;
