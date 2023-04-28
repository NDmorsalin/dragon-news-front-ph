import { Col, Container, Row } from "react-bootstrap";
import Footer from "../Shared/Footer/Footer";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";

const AuthLayout = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Row>
          <Col lg={3}></Col>
          <Col lg={6}>
            <Outlet />
          </Col>
          <Col lg={3}></Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default AuthLayout;
