import { Button, Col, Form, Row } from "react-bootstrap";

const CategoryForm = () => {
  return (
    <div>
      <h3 className="">Add new Category</h3>
      <Form>
        <Row>
          <Col>
            <Form.Control placeholder="Enter the name of Category" name="category-name" />
          </Col>
          <Col>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default CategoryForm;
