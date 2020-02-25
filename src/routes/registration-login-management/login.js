import express from "express";

import MockDataBase from "../../db/MockDataBase";

const router = express.Router();

const mockDB = new MockDataBase();

// const hgoMembers = mockDB.getHGOMembers();

router.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const hgoMembers = mockDB.getHGOMembers();

    // Find if the member exist
    const searchMember = hgoMembers.find(m => {
      return m.email === email && m.password === password;
    });

    if (searchMember) {
      res.status(200).json({
        isSuccessfull: true,
        member: searchMember,
        data: hgoMembers
      });
    } else {
      return res.status(400).json({
        isSuccessfull: false,
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
