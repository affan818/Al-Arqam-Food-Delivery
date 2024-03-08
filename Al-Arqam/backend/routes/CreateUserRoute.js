import express from "express";
import { body, validationResult } from "express-validator";
import dotenv from "dotenv";
dotenv.config();
import userModel from "../models/UserModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
// eslint-disable-next-line no-undef
const jwtSecretKey = process.env.JWT_SECRET;
// import createUser from "../CRUD/create.js";
const router = express.Router();

//get props and destructure
router.post(
  "/register",
  body("email", "invalid email").isEmail(),
  // password must be at least 5 chars long
  body("password", "password must have five character").isLength({ min: 5 }),
  async (req, res) => {
    const errors = validationResult(req);
    const salt = await bcrypt.genSalt(8);
    let secPassword = await bcrypt.hash(req.body.password, salt);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } else {
      await userModel
        .create({
          name: req.body.name,
          password: secPassword,
          email: req.body.email,
        })
        .then(() => res.send({ success: true }));
    }
  }
);
router.post(
  "/login",
  body("email", "invalid email").isEmail(),
  // password must be at least 5 chars long
  body("password", "password must have five character").isLength({ min: 5 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const email = req.body.email;

    try {
      // Find the user by email
      const userData = await userModel.findOne({ email });

      if (!userData) {
        // No user with the provided email exists
        return res.json("No record existed or enter a valid email");
      }

      // Compare the hashed password with the provided plaintext password
      const passwordMatch = await bcrypt.compare(
        req.body.password,
        userData.password
      );
      const data = {
        user: {
          id: userData.id,
        },
      };
      if (passwordMatch) {
        // Passwords match, authentication successful
        const authToken = jwt.sign(data, jwtSecretKey);
        return res.json({ success: true, authToken: authToken });
      } else {
        // Passwords don't match
        return res.json("Password is incorrect");
      }
    } catch (error) {
      // Handle any errors that occur during the process
      console.error("Error:", error);
      return res.json("No record existed or enter a valid email");
    }
  }
);
export default router;
