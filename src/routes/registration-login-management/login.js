import express from "express";

const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    res.status(200).json({
      data: req.body
    });
  } catch (error) {
    return res.status(500).send({
      error: error
    });
  }
});

module.exports = router;
