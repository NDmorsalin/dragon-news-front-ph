import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto d-flex align-items-center gap-3">
              <Link to="#features">Home</Link>
              <Link to="#pricing">About</Link>
              <Link to="#pricing">Career</Link>
            </Nav>
            <Nav>
              <Link to="#deets" className="fs-4 d-block me-2">
                <FaRegUserCircle />
              </Link>
              <Button variant="dark" className="rounded-0 px-4">
                Login
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
