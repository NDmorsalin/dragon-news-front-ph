import moment from "moment/moment";
import { Card, Image } from "react-bootstrap";
import {
  FaEye,
  FaRegBookmark,
  FaRegStar,
  FaShareAlt,
  FaStar,
} from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const {
    _id,
    rating,
    total_view,
    title,
    author,
    image_url,
    details,
  } = news;

  return (
    <div>
      <Card className="mb-3">
        <Card.Header className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-2">
            <div
              className=""
              style={{
                width: "40px",
                height: "40px",
                overflow: "hidden",
                borderRadius: "50%",
              }}
            >
              <Image src={author?.img} rounded className="img-fluid" />
            </div>
            <div className="">
              <p className="m-0">{author?.name}</p>
              <p className="m-0 text-secondary">
                {moment(author?.published_date, "YY-MM-DD").format(
                  "YYYY-MM-DD"
                )}
              </p>
            </div>
          </div>
          <div className="">
            <FaRegBookmark />
            <FaShareAlt className="ms-3" />
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Img variant="top" src={image_url} />
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {details.length < 250 ? (
              <>{details}</>
            ) : (
              <>
                {details.slice(0, 250)}...{" "}
                <Link className="btn btn-primary" to={`/news/${_id}`}>
                  Read more
                </Link>{" "}
              </>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted d-flex align-items-center justify-content-between">
          <div className=" d-flex align-items-center gap-2">
            <Rating
              placeholderRating={3.5}
              emptySymbol={<FaRegStar />}
              placeholderSymbol={<FaStar className="text-warning" />}
              fullSymbol={<FaStar />}
              readonly
            />
            <span>{rating?.number}</span>
          </div>
          <div className="">
            <FaEye className="me-3"/>
            {total_view}
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsCard;
