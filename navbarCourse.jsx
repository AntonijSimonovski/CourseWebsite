import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./myStyle.css";

class NavBarCourse extends React.Component {
  render() {
    return (
      <Navbar expand="lg" className="navbar justify-content-between">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link
                href=""
                bsPrefix="links"
                target="_blank"
                className="links"
              >
                Redshelf
              </Nav.Link>
              <Nav.Link
                href=""
                bsPrefix="links"
                target="_blank"
                className="links"
              >
                Labs/Recitations
              </Nav.Link>
              <Nav.Link
                href=""
                bsPrefix="links"
                target="_blank"
                className="links"
              >
                Announcements
              </Nav.Link>
              <Nav.Link
                href=""
                bsPrefix="links"
                target="_blank"
                className="links"
              >
                Syllabus
              </Nav.Link>
              <Nav.Link
                href={this.props.handinlink}
                bsPrefix="links"
                target="_blank"
                className="links"
              >
                {this.props.handin} Hand-In
              </Nav.Link>
              <Nav.Link
                href=""
                bsPrefix="links"
                target="_blank"
                className="links"
              >
                Permission Form
              </Nav.Link>
              <Nav.Link
                href=""
                bsPrefix="links"
                target="_blank"
                className="links"
              >
                Zoom
              </Nav.Link>
              <NavDropdown
                title="Assignments"
                id="basic-nav-dropdown"
                bsPrefix="links"
              >
                <NavDropdown.Item href="" target="_blank" className="links">
                  Lab 1
                </NavDropdown.Item>
                <NavDropdown.Item href="" target="_blank" className="links">
                  Lab 2
                </NavDropdown.Item>
                <NavDropdown.Item href="" target="_blank" className="links">
                  Lab 3
                </NavDropdown.Item>
                <NavDropdown.Item href="" target="_blank" className="links">
                  Lab 4
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="" target="_blank" className="links">
                  Project 1
                </NavDropdown.Item>
                <NavDropdown.Item href="" target="_blank" className="links">
                  Project 2
                </NavDropdown.Item>
                <NavDropdown.Item href="" target="_blank" className="links">
                  Project 3
                </NavDropdown.Item>
                <NavDropdown.Item href="" target="_blank" className="links">
                  Project 4
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavBarCourse;
