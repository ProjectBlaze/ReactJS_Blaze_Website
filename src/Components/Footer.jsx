import { Link } from "react-router-dom";

const DownPage = () => {
  return (
    <>
      <div>
        <footer className="bg-light">
          <div className="container">
            <div className="row py-4">
              <div className="col-md-4 text-center text-md-start">
                <p className="mb-0 text-muted">&copy; 2023-24 Project Blaze</p>
              </div>
              <div className="col-md-4 text-center">
                <Link to="/" className="d-flex align-items-center justify-content-center mb-3 mb-md-0 link-dark text-decoration-none">
                  <img src="/icons/logo-transparent.webp" width="70" alt="Project Blaze Logo" />
                </Link>
              </div>
              <div className="col-md-4 text-center text-md-end">
                <ul className="nav justify-content-center justify-content-md-end">
                  <li className="nav-item">
                    <Link to="/disclaimer" className="nav-link px-2 text-muted">Disclaimer</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/tac" className="nav-link px-2 text-muted">Terms&amp;Conditions</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/privacypolicy" className="nav-link px-2 text-muted">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default DownPage;
