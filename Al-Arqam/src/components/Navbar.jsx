import icon from "../assets/favIcon.png";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
const Navbar = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-success">
        <div className="container-fluid">
          <Link>
            <img className="navIcon" src={icon} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item ">
                <Link className="nav-link active fs-5 text-white" to={"/"}>
                  Home
                </Link>
              </li>
              {localStorage.getItem("authToken") ? (
                <li className="nav-item ">
                  <Link className="nav-link  text-white" to={"/myorder"}>
                    My Order
                  </Link>
                </li>
              ) : (
                ""
              )}
              <li className="nav-item">
                <Link className="nav-link text-white " to={"/about"}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white " to={"/contact"}>
                  Contact
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              {!localStorage.getItem("authToken") ? (
                <div>
                  <Link
                    className="btn bg-white text-success mx-1"
                    to={"/login"}
                  >
                    Login
                  </Link>
                  <Link
                    className="btn bg-white text-success mx-1"
                    to={"/signup"}
                  >
                    SignUp
                  </Link>
                </div>
              ) : (
                <>
                  <div className="btn bg-white text-success mx-2">My Cart</div>
                  <div
                    className="btn bg-white text-danger mx-2"
                    onClick={handleLogOut}
                  >
                    Logout
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
