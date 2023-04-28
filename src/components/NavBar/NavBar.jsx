import { Container, Nav, Navbar } from "react-bootstrap";
import { FaRegUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Navbar
        className="mt-3"
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto d-flex align-items-center gap-3">
              <NavLink
                className={({ isActive }) =>
                  `text-decoration-none fw-bold ${
                    isActive ? "text-primary" : "text-secondary"
                  }`
                }
                to="/category/all"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `text-decoration-none fw-bold ${
                    isActive ? "text-primary" : "text-secondary"
                  }`
                }
                to="/profile/about"
              >
                About
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `text-decoration-none fw-bold ${
                    isActive ? "text-primary" : "text-secondary"
                  }`
                }
                to="/profile/career"
              >
                Career
              </NavLink>
            </Nav>
            <Nav>
              <Link to="#deets" className="fs-4 d-block me-2">
                <FaRegUserCircle />
              </Link>
              <Link to="/auth/login" className="btn btn-dark px-4">
                Login
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
