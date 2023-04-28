import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <>
      <h1 className="">
        <Spinner animation="border" variant="primary" /> Loading...
        <Spinner animation="grow" variant="info" />
      </h1>
    </>
  );
};

export default Loader;
