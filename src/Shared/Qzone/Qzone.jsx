import qzone1 from "../../assets/qZone1.png";
import qzone2 from "../../assets/qZone2.png";
import qzone3 from "../../assets/qZone3.png";

const Qzone = () => {
  return (
    <div className="text-center p-4 rounded bg-secondary bg-opacity-50 my-4">
      <h4 className="">Q-zone</h4>
      <div className="">
        <img src={qzone1} alt="" className="img-fluid" />
        <img src={qzone2} alt="" className="img-fluid" />
        <img src={qzone3} alt="" className="img-fluid" />
      </div>
    </div>
  );
};

export default Qzone;
