import { Col, Container, Row } from "react-bootstrap";
import Title from "../../Shared/Header/Title/Title";
import { Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <>
      <div className="text-center py-2">
        <Title />
      </div>
      <Container>
        <Row>
          <Col lg={3}>
           Admin nav bar
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
