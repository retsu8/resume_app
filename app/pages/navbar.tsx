import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

export default function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className="fixed-top">
        <Container>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item target="new tab" href="https://www.linkedin.com/in/wpaddock08/">LinkedIn</NavDropdown.Item>
              <NavDropdown.Item target="new tab" href="https://github.com/retsu8">Github</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
      </>
    );
}