import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../Provider/AuthProvider/AuthProvider";

const Login = () => {
  const { loginWithEmailPassword } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await loginWithEmailPassword(email, password);
      // redirect to previous page
      navigate(location?.state?.from?.pathname || "/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
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
        <Button className="mt-4" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
