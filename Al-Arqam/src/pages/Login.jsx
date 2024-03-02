import "./signup.css";
import { Link } from "react-router-dom";
import { IoMail } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          navigate("/");
        } else {
          navigate("/signup");
          alert(result.data);
        }
      })
      .catch((err) => {
        console.log(`ERROR:-${err}`);
      });
  };
  return (
    <>
      <div className="container signup">
        <div className="header">
          <div className="text text-success">Login</div>
          <div className="underline"></div>
        </div>
        <form action="" onSubmit={handleSubmit}>
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
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
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
            <button type="submit" className="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
