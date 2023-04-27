import { Button, Col, Form, Row } from "react-bootstrap";

const CategoryForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      fetch("http://localhost:3000/api/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: e.target["category-name"].value,
        }),
      });

      // empty the input
      e.target["category-name"].value = "";
      
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h3 className="">Add new Category</h3>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Control
              placeholder="Enter the name of Category"
              name="category-name"
            />
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
