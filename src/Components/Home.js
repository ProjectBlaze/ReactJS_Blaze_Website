import React from "react";
import Navbar from "./Navbar";
import "./Stylesheet/Home.css";
import {Link} from 'react-router-dom';
const Home = () => {
  return (
    <div className="master">
        <Navbar />
      <div className="father d-flex flex-column flex-md-row container justify-content-between align-items-center my-5">
        <div className="child-1 order-2 order-md-1">
          <h2>
            Welcome to
            <h3 className="brand">Z Mobile</h3>
          </h2>
          <h3 className="headerh3">Stay Connected, Your Way!</h3>

          <Link to="/screenshot" style={{ textDecoration: "none" }}>
            <button type="button" className="downloadBtn">
<<<<<<< Updated upstream
              Download Now <img src={"images/arrow.png"} alt="arrow"/>
=======
              Get Started
>>>>>>> Stashed changes
            </button>
          </Link>
        </div>
        <div className="child-2 text-center my-5 my-md-0 order-md-2 order-1">
          <img
            src={"images/smiling_person1.png"}
            alt="Device"
            className="controller"
          />
          <img
            src={"images/smiling_person2.png"}
            alt="Device"
            className="controller"
          />
          <img
            src={"images/smiling_man.png"}
            alt="Device"
            className="controller"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
