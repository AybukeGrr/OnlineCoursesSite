import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import NavDropdown from "react-bootstrap/NavDropdown";


function TopNavbar() {
  return (
    <div>
      <Navbar classname="navbarContent" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/home">
            <img
              src="/logoStars.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Brand className="me-auto" href="/home">
            Kutup Yıldızı Akademi
          </Navbar.Brand>
          <Nav id="navbar" className="me-2">
            <Nav.Link href="./WhoAreWe">Biz Kimiz?</Nav.Link>
            <Nav.Link href="./Teachers">Eğitmenlerimiz</Nav.Link>
            {/* <Nav.Link href="#services">Hizmetlerimiz</Nav.Link> */}
            <Nav>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="Hizmetlerimiz"
                menuVariant="dark"
              >
                <NavDropdown.Item href="/Kids">KY Kids</NavDropdown.Item>
                <NavDropdown.Item href="/English">
                  KY English
                </NavDropdown.Item>
                <NavDropdown.Item href="/Translate">
                  KY Translate
                </NavDropdown.Item>
                <NavDropdown.Item href="/App">
                  KY App
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default TopNavbar;
