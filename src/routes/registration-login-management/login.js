import express from "express";

import db from "../../db/db";

const router = express.Router();

const members = db();

router.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const searchMember = members.find(m => {
      return m.email === email && m.password === password;
    });

    if (searchMember) {
      res.status(200).json({
        isSuccessfull: true,
        data: searchMember
      });
    } else {
      return res.status(400).json({
        isSuccessfull: true,
        message: "Invalid Credentials!"
      });
    }
  } catch (error) {
    return res.status(500).send({
      error: error
    });
  }
});

module.exports = router;
