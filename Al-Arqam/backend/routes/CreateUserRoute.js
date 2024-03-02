import express from "express";
import { body, validationResult } from "express-validator";
import userModel from "../models/UserModel.js";
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
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } else {
      await userModel.create(req.body);
      res.send({ success: true });
    }
  }
);
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  userModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("The password is incorrect");
      }
    } else {
      res.json("No record existed or enter a valid email");
    }
  });
});

export default router;
