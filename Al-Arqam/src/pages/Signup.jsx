import React, { useState } from "react";
import "./signup.css";
import { FaUserAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <div className="container signup">
        <div className="header">
          <div className="text text-success">Sign Up</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
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

        {/* <div className="forgot-password">
            forgot password ? <span>cicck here!</span>
          </div> */}

        <div className="submit-container">
          <div className="submit">Sign Up</div>

          <div className="submit gray">
            <Link className="nav-link" to={"/login"}>
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
