import Header from "../Shared/Header/Header";
import { Col, Container, Row } from "react-bootstrap";
import LeftNav from "../Shared/LeftNav/LeftNav";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import RightNav from "../Shared/RightNav/RightNav";
import Footer from "../Shared/Footer/Footer";
import { useAuth } from "../Provider/AuthProvider/AuthProvider";

const ProfileLayout = () => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return (
      <Navigate
        to="/auth/login"
        state={{
          from: location,
        }}
      />
    );
  }

  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col lg={3}>
            <LeftNav />
          </Col>
          <Col lg={6}>
            <Outlet />
          </Col>
          <Col lg={3}>
            <RightNav />
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default ProfileLayout;
