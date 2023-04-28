import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaRegUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../Provider/AuthProvider/AuthProvider";

const NavBar = () => {
  const { logout, user } = useAuth();
  // console.log(user?.photoURL);
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
                to="/about"
              >
                About
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `text-decoration-none fw-bold ${
                    isActive ? "text-primary" : "text-secondary"
                  }`
                }
                to="/career"
              >
                Career
              </NavLink>
              {user?.role?.role !== "user" ? (
                <NavLink
                  className={({ isActive }) =>
                    `text-decoration-none fw-bold ${
                      isActive ? "text-primary" : "text-secondary"
                    }`
                  }
                  to="/admin"
                >
                  {user?.role?.role}
                </NavLink>
              ) : null}
            </Nav>
            <Nav>
              {user ? (
                <Link to="/profile/me" className="fs-4 d-block me-2">
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt=""
                      className="rounded-circle"
                      style={{ width: "40px", height: "40px" }}
                    />
                  ) : (
                    <FaRegUserCircle />
                  )}
                </Link>
              ) : null}

              {user ? (
                <Button onClick={logout} variant="danger" className="btn  px-4">
                  Logout
                </Button>
              ) : (
                <Link to="/auth/login" className="btn btn-dark px-4">
                  Login
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
