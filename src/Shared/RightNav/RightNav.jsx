import { Button } from "react-bootstrap";
import {
  FaFacebookF,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import Qzone from "../Qzone/Qzone";
import bg from "../../assets/bg.png";

const RightNav = () => {
  return (
    <div className="">
      <h4 className="">Login with</h4>
      <div className="d-flex flex-column gap-2">
        <Button variant="outline-primary">
          <FaGoogle /> Login with Google
        </Button>
        <Button variant="outline-secondary">
          <FaGithub /> Login with Github
        </Button>
      </div>
      <h4 className="mt-4">Find Us On</h4>
      <div className="d-flex flex-column gap-3">
        <div className="d-flex align-items-center gap-2 fs-4">
          <FaFacebookF className=" text-primary" />{" "}
          <p className="m-0">Facebook</p>
        </div>
        <div className="d-flex align-items-center gap-2 fs-4">
          <FaTwitter className="text-info" /> <p className="m-0">Twitter</p>
        </div>
        <div className="d-flex align-items-center gap-2 fs-4">
          <FaInstagram className="text-danger" />{" "}
          <p className="m-0">Instagram</p>
        </div>
      </div>

      <Qzone />

      <div
        className="text-center px-4 py-5 rounded text-white"
        style={{
          background: `url(${bg})`,
        }}
      >
        <h1 className="fs-1 fw-bold mb-5">Create an Amazing Newspaper</h1>
        <p className="fs-5 mb-5">
          Discover thousands of options, easy to customize layouts, one-click to
          import demo and much more.
        </p>
        <Button variant="danger" className="rounded-0 px-4 py-3 fs-4">
        Learn More
        </Button>
      </div>
    </div>
  );
};

export default RightNav;
