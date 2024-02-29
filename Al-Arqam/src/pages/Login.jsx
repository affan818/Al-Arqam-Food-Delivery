import "./signup.css";
import { Link } from "react-router-dom";
import { IoMail } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";

const Login = () => {
  return (
    <>
      <div className="container signup">
        <div className="header">
          <div className="text text-success">Login</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <label id="email">
              <IoMail />
            </label>
            <input
              className="text-dark"
              id="email"
              type="email"
              placeholder="Email Id"
            />
          </div>
          <div className="input">
            <label id="password">
              <RiLockPasswordLine />
            </label>
            <input
              className="text-dark"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="forgot-password">
          forgot password ? <span>cicck here!</span>
        </div>
        <div className="submit-container">
          <div className="submit gray">
            <Link className="nav-link" to={"/signup"}>
              Sign up
            </Link>
          </div>
          <div className="submit">Login</div>
        </div>
      </div>
    </>
  );
};

export default Login;
