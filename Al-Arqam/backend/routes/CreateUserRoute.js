import express from "express";
import createUser from "../CRUD/create.js";
const router = express.Router();

//get props and destructure it
router.post("/create", async (req, res) => {
  await createUser(
    req.body.name,
    req.body.email,
    req.body.password,
    req.body.location
  );
  res.send({ success: true });
});

export default router;
