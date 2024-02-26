import express from "express";
import createUser from "../CRUD/create.js";
const router = express.Router();

router.post("/create", (req, res) => {
  createUser();
    res.send({ success: true });
});

export default router;

