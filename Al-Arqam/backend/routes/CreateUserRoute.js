import express from "express";
import { body, validationResult } from "express-validator";
import createUser from "../CRUD/create.js";
const router = express.Router();

//get props and destructure
router.post(
  "/create",
  body("email", "invalid email").isEmail(),
  // password must be at least 5 chars long
  body("password", "password must have five character").isLength({ min: 5 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } else {
      await createUser(
        req.body.name,
        req.body.email,
        req.body.password,
        req.body.location
      );
      res.send({ success: true });
    }
  }
);

export default router;
