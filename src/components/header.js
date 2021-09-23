import { Link } from "gatsby"
import * as React from "react"
import { Nav, Container, Navbar } from "react-bootstrap"
import * as headerStyles from "./Header.module.css"

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">آذرلند</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-aut">
              <Nav.Link as={Link} href="/">
                خانه
              </Nav.Link>
              <Nav.Link as={Link} href="/projects">
                پروژه ها
              </Nav.Link>
              <Nav.Link as={Link} href="/aboutUs">
                درباره ما
              </Nav.Link>
              <Nav.Link as={Link} href="/contactUs">
                تماس با ها
              </Nav.Link>
              <Nav.Link as={Link} href="/market">
                فروشگاه ها
              </Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
