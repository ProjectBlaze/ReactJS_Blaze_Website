import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);

  const toggleOffcanvas = () => {
    setOffcanvasOpen((prevState) => !prevState);
  };

  const handleLinkClick = () => {
    setOffcanvasOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light px-lg-5">
      <div className="container-fluid d-flex">
        <Link to="/">
          <img src={"./icons/logo-transparent.webp"} alt="Project Blaze" width="60" className="mr-auto" />
        </Link>
        <button
          className="navbar-toggler border-0 ms-auto"
          type="button"
          onClick={toggleOffcanvas}
        >
          <i className="bi bi-list fs-1"></i>
        </button>
      </div>

      <div
        className={`offcanvas offcanvas-end ${offcanvasOpen ? "show" : ""}`}
        tabIndex="-1"
        id="sidebar"
        aria-labelledby="sidebarLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="sidebarLabel">
            Menu
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            onClick={toggleOffcanvas}
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={handleLinkClick}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/features" onClick={handleLinkClick}>
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/screenshot" onClick={handleLinkClick}>
                Screenshot
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/download" onClick={handleLinkClick}>
                Downloads
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex" href="https://github.com/ProjectBlaze/maintainership/" target="_blank">
                Maintainership <div className="ms-2"><i className="bi bi-box-arrow-up-right"></i></div>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex" href="https://github.com/ProjectBlaze/official_devices/blob/14/changelog.md" target="_blank">
                Changelog <div className="ms-2"><i className="bi bi-box-arrow-up-right"></i></div>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex" href="https://github.com/ProjectBlaze/" target="_blank">
                GitHub <div className="ms-2"><i className="bi bi-box-arrow-up-right"></i></div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
