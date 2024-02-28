import React, { useState } from "react";
import "./signup.css";
import { FaUserAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";

const Signup = () => {
  const [action, setAction] = useState("Sign Up");
  return (
    <>
      <div className="container signup">
        <div className="header">
          <div className="text text-success">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          {action === "Login" ? (
            <div></div>
          ) : (
            <div className="input">
              <label id="name">
                <FaUserAlt />
              </label>
              <input
                className="text-dark"
                id="name"
                placeholder="Name"
                type="text"
              />
            </div>
          )}

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
        {action === "Sign Up" ? (
          <div></div>
        ) : (
          <div className="forgot-password">
            forgot password ? <span>cicck here!</span>
          </div>
        )}

        <div className="submit-container">
          <div
            className={action === "Login" ? "submit gray" : "submit"}
            onClick={() => setAction("Sign Up")}
          >
            Sign Up
          </div>
          <div
            className={action === "Sign Up" ? "submit gray" : "submit"}
            onClick={() => setAction("Login")}
          >
            Login
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
