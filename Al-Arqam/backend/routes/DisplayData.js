import express from "express";
const router = express.Router();

router.post("/fooddata", function (req, res) {
  try {
    // eslint-disable-next-line no-undef
    res.send([global.foodItems]);
  } catch (error) {
    res.send(`ERROR--${error}`);
  }
});

export default router;
