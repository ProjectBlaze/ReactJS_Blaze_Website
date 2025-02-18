import { useEffect, useState } from "react";
import "./stylesheet/Download.css";
import NavBar from "./Navbar";

const Download = () => {
  const [data, setData] = useState([]);
  async function fetchData() {
    setData(
      await (
        await fetch(
          "https://raw.githubusercontent.com/ProjectBlaze/official_devices/14/post/device.json"
        )
      ).json()
    );
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <NavBar />
      {data.length === 0 ? <div className="container" style={{ minHeight: "70vh" }}>Loading</div> : <>
        <div className="wrapper">
          <div className="cards_wrap" id="main">
            {data.map((element) => {
              return (
                <div className="card_item" key={element.CodeName}>
                  <div className="card_inner">
                    <div className="role_name">{element.CodeName}</div>
                    <div className="real_name">
                      By
                      <a
                        href={element["Support Group"]}
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: "none", color: "#b6c0c2" }}
                      >
                        @{element.UserName}
                      </a>
                    </div>
                    <div className="film">{element.DeviceName}</div>
                    <br />
                    <a
                      href={element.Pling}
                      className="hero-btn"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Download Now!
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
      }</>
  );
};

export default Download;
