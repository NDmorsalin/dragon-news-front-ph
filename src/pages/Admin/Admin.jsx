import { Col, Container, Row } from "react-bootstrap";
import Title from "../../Shared/Header/Title/Title";
import { Navigate, Outlet } from "react-router-dom";
import AdminLeftNav from "./AdminLeftNav/AdminLeftNav";
import { useAuth } from "../../Provider/AuthProvider/AuthProvider";

const Admin = () => {
  const {user} = useAuth();
  if (user.role === "user") {
    return <Navigate to='/' />
  }

  return (
    <>
      <div className="text-center py-2">
        <Title />
      </div>
      <Container>
        <Row>
          <Col lg={3}>
            <AdminLeftNav />
          </Col>
          <Col>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Admin;
