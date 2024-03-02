import "./signup.css";
import { FaUserAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/register", { name, email, password })
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="container signup">
        <div className="header">
          <div className="text text-success">Sign Up</div>
          <div className="underline"></div>
        </div>
        <form action="" onSubmit={handleSubmit}>
          <div className="inputs">
            <div className="input">
              <label id="name">
                <FaUserAlt />
              </label>
              <input
                className="text-dark"
                id="name"
                name="name"
                placeholder="Username"
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="input">
              <label id="email">
                <IoMail />
              </label>
              <input
                className="text-dark"
                id="email"
                type="email"
                name="email"
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
          Already have an account? 
            <span>
            Login
            </span>
          </div>
          <div className="submit-container">
            <button type="submit" className="submit">
              Sign Up
            </button>
            <div className="submit gray">
              <Link className="nav-link" to={"/login"}>
                Login
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
