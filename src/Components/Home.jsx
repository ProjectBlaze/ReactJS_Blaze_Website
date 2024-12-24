import Navbar from "./Navbar";
import "./Stylesheet/Home.css";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="master">
      <Navbar />
      <div className="father d-flex flex-column flex-md-row container justify-content-between align-items-center my-5">
        <div className="child-1 order-2 order-md-1">
          <h2>
            Introducing
            <br />
            Project Blaze
          </h2>
          <h3 className="headerh3">An AOSP Based Operating System</h3>
          <p>All your needs are satisfied here!</p>
          <Link to="/download" style={{ textDecoration: "none" }}>
            <button type="button" className="downloadBtn">
              Download Now <i className="bi bi-arrow-right"></i>
            </button>
          </Link>
        </div>
        <div className="child-2 text-center my-5 my-md-0 order-md-2 order-1">
          <img src={"icons/textProjectBlaze_light.webp"} alt="Device" className="rounded-5 controller" />
        </div>
      </div>
    </div>
  );
};

export default Home;
