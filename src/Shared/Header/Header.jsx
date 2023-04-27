import { Button, Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import NavBar from "../../components/NavBar/NavBar";
import Title from "./Title/Title";

const Header = () => {
  return (
    <div className="text-center py-2">
      <Title />
      <Container className="d-flex p-2 bg-dark bg-opacity-25 rounded mb-3">
        <Button variant="danger">Latest</Button>
        <Marquee pauseOnHover>
          <p className="m-0 text-danger">
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </p>
        </Marquee>
      </Container>

      <NavBar />
    </div>
  );
};

export default Header;
