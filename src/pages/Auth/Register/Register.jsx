import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useAuth } from "../../../Provider/AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Registration = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { registerWithEmailPassword } = useAuth();
  const [name, setName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // console.log(name, photoUrl, email, password);
    try {
      await registerWithEmailPassword(email, password, name, photoUrl);

      // redirect to previous page
      navigate(location?.state?.from?.pathname || "/");
    } catch (error) {
      console.error(error);
      console.log(error.message);
    }
  };

  return (
    <Container className="p-5 rounded bg-secondary bg-opacity-25">
      <h1>Registration</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPhotoUrl">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter photo URL"
            value={photoUrl}
            onChange={(e) => setPhotoUrl(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We&apos;ll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button className="mt-4 d-block w-100" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Registration;
