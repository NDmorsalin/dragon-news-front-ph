import { useState } from "react";
import { useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import eIn1 from "../../assets/1.png";
import eIn2 from "../../assets/2.png";
import eIn3 from "../../assets/3.png";

const LeftNav = () => {
  const location = useLocation();
  const [categories, setCategories] = useState([]);

  // get the category from the API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/categories");
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategories();
  }, []);
  return (
    <div>
      <h4 className="">All Categories</h4>
      <div className="p-2">
        <NavLink
          state={{
            name: "All News",
            from: location,
          }}
          className={({ isActive }) =>
            isActive
              ? "d-block p-2 btn btn-primary mb-2 text-decoration-none"
              : "d-block p-2 btn btn-secondary mb-2 text-decoration-none"
          }
          to={`/category/all`}
          key={"all"}
        >
          All News
        </NavLink>
        {categories.map((category) => (
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "d-block p-2 btn btn-primary mb-2 text-decoration-none"
                : "d-block p-2 btn btn-secondary mb-2 text-decoration-none"
            }
            to={`/category/${category._id}`}
            state={{
              name: category.name,
              from: location,
            }}
            key={category._id}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
      <div className="mt-5">
        <Row xs={1}  className="g-3">
          
            <Col>
              <Card>
                <Card.Img variant="top" src={eIn1} />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
       
            <Col>
              <Card>
                <Card.Img variant="top" src={eIn2} />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
       
            <Col>
              <Card>
                <Card.Img variant="top" src={eIn3} />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
       
        </Row>
      </div>
    </div>
  );
};

export default LeftNav;
