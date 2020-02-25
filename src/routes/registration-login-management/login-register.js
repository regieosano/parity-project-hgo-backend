import express from "express";
import _ from "lodash";

import MockDataBase from "../../db/MockDataBase";

const router = express.Router();

const mockDB = new MockDataBase();

const hgoMembers = mockDB.getHGOMembers();

router.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

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

router.post("/register", async (req, res) => {
  try {
    const email = req.body.email;

    // Check if the member exist already
    const isMemberRegisteredAlready = hgoMembers.find(m => {
      return m.email === email;
    });

    if (isMemberRegisteredAlready) {
      return res.status(400)({
        error: "Member already registered."
      });
    }

    // If not yet, Store the Registration Object
    const newMember = _.pick(req.body, [
      "accountID",
      "accountName",
      "address",
      "type",
      "email",
      "phoneNumber",
      "hauler_grower",
      "password"
    ]);

    // Add New Member to Mock Database
    hgoMembers.push(newMember);

    res.status(201).json({
      newMember
    });
  } catch (error) {
    res.status(500).send("Something failed - " + error);
  }
});

module.exports = router;
